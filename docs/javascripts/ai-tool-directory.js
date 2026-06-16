(function () {
  var dataElement = document.getElementById("ai-tool-directory-data");
  var mount = document.getElementById("ai-tool-directory-app");

  if (!dataElement || !mount) {
    return;
  }

  // Remove the auto-generated page title h1 — this page uses the directory as its headline
  var autoH1 = document.querySelector(".md-content__inner > h1");
  if (autoH1) { autoH1.hidden = true; }

  var controls = Array.prototype.slice.call(document.querySelectorAll("[data-ai-directory-mode]"));
  var controlsPanel = document.getElementById("ai-directory-controls");
  var controlSet = controlsPanel ? controlsPanel.querySelector(".ai-directory-control-set") : null;
  var fallback = document.querySelector(".ai-directory-fallback");
  var tocNav = document.getElementById("ai-directory-toc-nav");
  var activeMode = "support";
  var compactControlsMediaQuery = window.matchMedia("(max-width: 44em)");
  var mobileMediaQuery = window.matchMedia("(max-width: 44em)");
  var menuButton;
  var tocButton;
  var tocButtonLabel;
  var resizeTimer;
  var scrollTicking;
  var rows = [];

  try {
    rows = JSON.parse(dataElement.textContent);
  } catch (error) {
    mount.textContent = "The AI tool directory could not be loaded.";
    return;
  }

  rows = rows.map(function (row) {
    return {
      tool: row.tool,
      application: row.application,
      summary: row.summary,
      supportGroup: row.supportGroup,
      activityType: normalizeActivityType(row.activityType),
      privacyTier: row.privacyTier,
      trainingProtection: normalizeTrainingProtection(row.trainingProtection),
      trainingNote: row.trainingNote,
      parentTool: row.parentTool,
      displayGroup: row.displayGroup,
      link: row.link,
      sortOrder: row.sortOrder
    };
  });

  var modes = {
    support: {
      label: "UNC Support",
      field: "supportGroup",
      order: ["UNC supported", "Not UNC supported"]
    },
    activityType: {
      label: "Type of Activity",
      field: "activityType",
      order: [
        "Planning",
        "Assessment",
        "Administrative",
        "Student Tools",
        "Chat",
        "Media Creation"
      ]
    },
    privacyTier: {
      label: "UNC Tier / FERPA",
      field: "privacyTier",
      order: ["Tier 2 / FERPA", "Tier 1", "Tier 0"]
    },
    trainingProtection: {
      label: "Training Protection",
      field: "trainingProtection",
      order: ["Protected", "Unknown", "Not protected"]
    }
  };

  if (fallback) {
    fallback.hidden = true;
    fallback.setAttribute("aria-hidden", "true");
  }

  setupMobileMenu();
  setupMobileTOC();

  controls.forEach(function (control) {
    control.addEventListener("click", function () {
      var selectedMode = control.getAttribute("data-ai-directory-mode");
      if (!modes[selectedMode] || selectedMode === activeMode) {
        return;
      }
      activeMode = selectedMode;
      render(activeMode);
      closeMobileMenu();
      scrollToTop();
    });
  });

  document.addEventListener("click", function (event) {
    if (!isMenuCollapsed() || !controlsPanel || !controlsPanel.classList.contains("is-open")) {
      if (tocNav && tocNav.classList.contains("is-open")) {
        if (tocButton && tocButton.contains(event.target)) {
          return;
        }

        if (tocNav.contains(event.target)) {
          return;
        }

        closeMobileTOC();
      }

      return;
    }

    if (controlsPanel.contains(event.target)) {
      return;
    }

    closeMobileMenu();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && controlsPanel && controlsPanel.classList.contains("is-open")) {
      closeMobileMenu();
    }

    if (event.key === "Escape" && tocNav && tocNav.classList.contains("is-open")) {
      closeMobileTOC();
    }
  });

  if (tocNav) {
    tocNav.addEventListener("click", function (event) {
      var link = event.target.closest(".ai-directory-toc-link");
      if (!link) {
        return;
      }

      var hash = link.getAttribute("href") || "";
      if (hash.charAt(0) !== "#") {
        return;
      }

      var target = document.querySelector(hash);
      if (!target) {
        return;
      }

      event.preventDefault();
      updateStickyOffsets();

      var targetTop = target.getBoundingClientRect().top + window.pageYOffset - getSectionAnchorOffset();
      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: "smooth"
      });

      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, "", hash);
      } else {
        window.location.hash = hash;
      }

      setActiveSectionLabel(getHeadingLabel(target), hash.slice(1));
      closeMobileTOC();
    });
  }

  window.addEventListener("resize", function () {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(function () {
      updateStickyOffsets();
      updateActiveSectionUI();
    }, 90);
  });

  window.addEventListener("scroll", function () {
    if (scrollTicking) {
      return;
    }

    scrollTicking = true;
    window.requestAnimationFrame(function () {
      updateActiveSectionUI();
      scrollTicking = false;
    });
  }, { passive: true });

  if (compactControlsMediaQuery.addEventListener) {
    compactControlsMediaQuery.addEventListener("change", onCompactViewportChange);
  } else if (compactControlsMediaQuery.addListener) {
    compactControlsMediaQuery.addListener(onCompactViewportChange);
  }

  if (mobileMediaQuery.addEventListener) {
    mobileMediaQuery.addEventListener("change", onMobileViewportChange);
  } else if (mobileMediaQuery.addListener) {
    mobileMediaQuery.addListener(onMobileViewportChange);
  }

  // Set sticky offsets after first layout pass.
  requestAnimationFrame(function () {
    updateStickyOffsets();
  });

  render(activeMode);

  function setupMobileMenu() {
    if (!controlsPanel || !controlSet) {
      return;
    }

    if (!controlSet.id) {
      controlSet.id = "ai-directory-control-set";
    }

    menuButton = document.createElement("button");
    menuButton.type = "button";
    menuButton.className = "ai-directory-menu-button";
    menuButton.setAttribute("aria-controls", controlSet.id);
    menuButton.setAttribute("aria-expanded", "false");
    updateMenuButtonLabel(activeMode);
    controlsPanel.insertBefore(menuButton, controlSet);

    menuButton.addEventListener("click", function () {
      if (!isMenuCollapsed()) {
        return;
      }

      if (controlsPanel.classList.contains("is-open")) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    onMobileViewportChange();
  }

  function setupMobileTOC() {
    var tocRow;

    if (!tocNav) {
      return;
    }

    if (!tocNav.id) {
      tocNav.id = "ai-directory-toc-nav";
    }

    tocRow = document.createElement("div");
    tocRow.className = "ai-directory-toc-mobile-row";

    tocButtonLabel = document.createElement("span");
    tocButtonLabel.className = "ai-directory-toc-mobile-label";
    tocButtonLabel.textContent = "Jump To";

    tocButton = document.createElement("button");
    tocButton.type = "button";
    tocButton.className = "ai-directory-toc-button";
    tocButton.setAttribute("aria-controls", tocNav.id);
    tocButton.setAttribute("aria-expanded", "false");
    tocButton.textContent = "Jump to section";

    tocRow.appendChild(tocButtonLabel);
    tocRow.appendChild(tocButton);
    tocNav.parentNode.insertBefore(tocRow, tocNav);

    tocButton.addEventListener("click", function () {
      if (!mobileMediaQuery.matches) {
        return;
      }

      if (tocNav.classList.contains("is-open")) {
        closeMobileTOC();
      } else {
        openMobileTOC();
      }
    });
  }

  function isMenuCollapsed() {
    return compactControlsMediaQuery.matches;
  }

  function openMobileMenu() {
    if (!controlsPanel || !menuButton) {
      return;
    }

    closeMobileTOC();
    controlsPanel.classList.add("is-open");
    menuButton.setAttribute("aria-expanded", "true");
    updateStickyOffsets();
  }

  function closeMobileMenu() {
    if (!controlsPanel || !menuButton) {
      return;
    }

    controlsPanel.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    updateStickyOffsets();
  }

  function openMobileTOC() {
    if (!tocNav || !tocButton) {
      return;
    }

    closeMobileMenu();
    tocNav.classList.add("is-open");
    tocButton.setAttribute("aria-expanded", "true");
    updateStickyOffsets();
  }

  function closeMobileTOC() {
    if (!tocNav || !tocButton) {
      return;
    }

    tocNav.classList.remove("is-open");
    tocButton.setAttribute("aria-expanded", "false");
    updateStickyOffsets();
  }

  function onCompactViewportChange() {
    closeMobileMenu();
    updateMenuButtonLabel(activeMode);
    updateStickyOffsets();
    updateActiveSectionUI();
  }

  function onMobileViewportChange() {
    closeMobileTOC();
    updateMenuButtonLabel(activeMode);
    updateStickyOffsets();
    updateActiveSectionUI();
  }

  function render(modeName) {
    var mode = modes[modeName] ? modeName : "support";

    updateMenuButtonLabel(mode);

    controls.forEach(function (control) {
      var isActive = control.getAttribute("data-ai-directory-mode") === mode;
      control.classList.toggle("is-active", isActive);
      control.setAttribute("aria-pressed", String(isActive));
    });

    mount.replaceChildren();

    if (!rows.length) {
      var empty = document.createElement("p");
      empty.className = "ai-directory-empty";
      empty.textContent = "No tools are available in this directory yet.";
      mount.appendChild(empty);
      return;
    }

    var status = document.createElement("p");
    status.className = "ai-directory-status-line";
    // status.textContent = mode === "support"
    //   ? "Default view: parent tools are grouped under UNC support status."
    //   : "Grouped by " + modes[mode].label + ": each row is one application.";
    mount.appendChild(status);

    if (mode === "support") {
      renderSupportGroups();
    } else {
      renderFlatGroups(modes[mode]);
    }

    updateTOC();
    updateActiveSectionUI();
  }

  function updateMenuButtonLabel(modeName) {
    var mode = modes[modeName] ? modeName : activeMode;
    var label;

    if (!menuButton || !modes[mode]) {
      return;
    }

    label = modes[mode].label;
    menuButton.textContent = label;
  }

  function updateTOC() {
    var tocNav = document.getElementById("ai-directory-toc-nav");
    if (!tocNav) return;

    var dynamicH2s = Array.prototype.slice.call(mount.querySelectorAll("h2[id]"));
    tocNav.replaceChildren();

    dynamicH2s.forEach(function (h2) {
      var label = getHeadingLabel(h2);
      var a = document.createElement("a");
      a.href = "#" + h2.id;
      a.className = "ai-directory-toc-link";
      a.textContent = label.trim() || h2.id;
      tocNav.appendChild(a);
    });

    requestAnimationFrame(function () {
      updateStickyOffsets();
      updateActiveSectionUI();
    });
  }

  function getHeadingLabel(h2) {
    var label = "";

    Array.prototype.forEach.call(h2.childNodes, function (node) {
      if (node.nodeType === 3) {
        label += node.textContent;
      }
    });

    return label.trim() || h2.id || "";
  }

  function updateActiveSectionUI() {
    var headings;
    var activeHeading = null;
    var anchorOffset;

    if (!tocNav || !tocButton) {
      return;
    }

    headings = Array.prototype.slice.call(mount.querySelectorAll("h2[id]"));
    if (!headings.length) {
      setActiveSectionLabel("Jump to section", "");
      return;
    }

    anchorOffset = getSectionAnchorOffset() + 12;

    headings.forEach(function (heading) {
      if (heading.getBoundingClientRect().top <= anchorOffset) {
        activeHeading = heading;
      }
    });

    if (!activeHeading) {
      activeHeading = headings[0];
    }

    setActiveSectionLabel(getHeadingLabel(activeHeading), activeHeading.id);
  }

  function setActiveSectionLabel(label, activeId) {
    var safeLabel = label || "Jump to section";

    if (mobileMediaQuery.matches) {
      tocButton.textContent = safeLabel;
      tocButton.setAttribute("aria-label", "Jump to section: " + safeLabel);
    } else {
      tocButton.textContent = "Jump to section";
      tocButton.setAttribute("aria-label", "Jump to section");
    }

    Array.prototype.forEach.call(tocNav.querySelectorAll(".ai-directory-toc-link"), function (link) {
      var isActive = activeId && link.getAttribute("href") === ("#" + activeId);
      link.classList.toggle("is-active", Boolean(isActive));
    });
  }

  function updateStickyOffsets() {
    var headerH = getHeaderHeight();
    document.documentElement.style.setProperty("--ai-dir-controls-top", toCssPx(headerH));
    document.documentElement.style.setProperty("--ai-dir-thead-top", toCssPx(getStickyBarOffset()));
  }

  function getHeaderHeight() {
    var header = document.querySelector(".md-header");
    return getElementHeight(header, 48);
  }

  function getStickyBarOffset() {
    var bar = document.getElementById("ai-directory-sticky-bar");
    return getHeaderHeight() + getElementHeight(bar, 0);
  }

  function getElementHeight(element, fallback) {
    if (!element) {
      return fallback;
    }

    var rect = element.getBoundingClientRect();
    return rect.height || element.offsetHeight || fallback;
  }

  function toCssPx(value) {
    return (Math.round(value * 1000) / 1000) + "px";
  }

  function getSectionAnchorOffset() {
    return getStickyBarOffset() + 10;
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderSupportGroups() {
    getOrderedGroups(rows, "supportGroup", modes.support.order).forEach(function (entry) {
      var groupName = entry[0];
      var groupRows = entry[1];
      var section = createSection(groupName, groupRows.length + " applications");
      var table = createTable(["Tool", "Activity Type", "UNC Tier / FERPA", "Training Protection", "Summary"]);
      var cards = createCardList();
      var tbody = document.createElement("tbody");
      var parentGroups = getParentGroups(groupRows);

      parentGroups.forEach(function (parentEntry, parentIndex) {
        var parentRows = sortRows(parentEntry[1]);
        var stripeClass = parentIndex % 2 === 0 ? "ai-directory-group-odd" : "ai-directory-group-even";

        parentRows.forEach(function (row, index) {
          tbody.appendChild(createSupportRow(row, index === 0, stripeClass));
          cards.appendChild(createCard(row, {
            hiddenField: "supportGroup",
            stripeClass: stripeClass
          }));
        });
      });

      table.appendChild(tbody);
      section.appendChild(wrapTable(table));
      section.appendChild(cards);
      mount.appendChild(section);
    });
  }

  function renderFlatGroups(mode) {
    var allColumns = [
      { label: "Tool", field: null },
      { label: "Activity Type", field: "activityType" },
      { label: "UNC Support", field: "supportGroup" },
      { label: "UNC Tier / FERPA", field: "privacyTier" },
      { label: "Training Protection", field: "trainingProtection" },
      { label: "Summary", field: null }
    ];
    var headers = allColumns
      .filter(function (col) { return col.field !== mode.field; })
      .map(function (col) { return col.label; });

    getOrderedGroups(rows, mode.field, mode.order).forEach(function (entry) {
      var groupName = entry[0];
      var groupRows = sortRows(entry[1]);
      var section = createSection(groupName, groupRows.length + " applications");
      var table = createTable(headers);
      var cards = createCardList();
      var tbody = document.createElement("tbody");

      groupRows.forEach(function (row) {
        tbody.appendChild(createFlatRow(row, mode.field));
        cards.appendChild(createCard(row, {
          hiddenField: mode.field
        }));
      });

      table.appendChild(tbody);
      section.appendChild(wrapTable(table));
      section.appendChild(cards);
      mount.appendChild(section);
    });
  }

  function createSupportRow(row, showTool, stripeClass) {
    var tableRow = document.createElement("tr");
    if (stripeClass) {
      tableRow.classList.add(stripeClass);
    }
    if (showTool) {
      appendToolCell(tableRow, row);
    } else {
      var emptyCell = document.createElement("td");
      emptyCell.className = "ai-directory-continued ai-directory-col-tool";
      tableRow.appendChild(emptyCell);
    }
    appendTextCell(tableRow, row.activityType, "ai-directory-col-activity");
    appendTierCell(tableRow, row.privacyTier);
    appendTrainingCell(tableRow, row.trainingProtection, row.trainingNote);
    appendTextCell(tableRow, row.summary, "ai-directory-col-summary");
    return tableRow;
  }

  function createFlatRow(row, hiddenField) {
    var tableRow = document.createElement("tr");
    appendToolCell(tableRow, row);
    if (hiddenField !== "activityType") { appendTextCell(tableRow, row.activityType, "ai-directory-col-activity"); }
    if (hiddenField !== "supportGroup") { appendSupportCell(tableRow, row.supportGroup); }
    if (hiddenField !== "privacyTier") { appendTierCell(tableRow, row.privacyTier); }
    if (hiddenField !== "trainingProtection") { appendTrainingCell(tableRow, row.trainingProtection, row.trainingNote); }
    appendTextCell(tableRow, row.summary, "ai-directory-col-summary");
    return tableRow;
  }

  function createSection(title, countText) {
    var section = document.createElement("section");
    var heading = document.createElement("h2");
    var count = document.createElement("span");
    var slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

    section.className = "ai-directory-group";
    heading.id = slug;
    heading.className = "ai-directory-group-heading";
    heading.textContent = title;
    count.textContent = countText;
    heading.appendChild(count);
    section.appendChild(heading);
    return section;
  }

  function createTable(headers) {
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var headerRow = document.createElement("tr");

    headers.forEach(function (header) {
      var th = document.createElement("th");
      var headerClass = getColumnClass(header);

      th.scope = "col";
      th.textContent = header;
      if (headerClass) {
        th.classList.add(headerClass);
      }
      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);
    return table;
  }

  function wrapTable(table) {
    var wrapper = document.createElement("div");
    wrapper.className = "tool-comparison-table tool-comparison-table-compact ai-directory-table";
    wrapper.appendChild(table);
    return wrapper;
  }

  function createCardList() {
    var wrapper = document.createElement("div");
    wrapper.className = "ai-directory-card-list";
    return wrapper;
  }

  function createCard(row, options) {
    var settings = options || {};
    var hiddenField = settings.hiddenField || "";
    var article = document.createElement("article");
    var header = document.createElement("div");
    var meta = document.createElement("div");
    var summary = document.createElement("p");

    article.className = "ai-directory-card";
    if (settings.stripeClass) {
      article.classList.add(settings.stripeClass);
    }

    header.className = "ai-directory-card-header";
    appendCardTitle(header, row);
    article.appendChild(header);

    meta.className = "ai-directory-card-meta";
    if (hiddenField !== "supportGroup") {
      appendCardMeta(meta, "UNC Support", row.supportGroup);
    }
    if (hiddenField !== "privacyTier") {
      appendCardMeta(meta, "UNC Tier / FERPA", createTierBadge(row.privacyTier));
    }
    if (hiddenField !== "trainingProtection") {
      appendCardMeta(meta, "Training Protection", createTrainingBadge(row.trainingProtection, row.trainingNote));
    }
    article.appendChild(meta);

    summary.className = "ai-directory-card-summary";
    summary.textContent = row.summary;
    article.appendChild(summary);

    return article;
  }

  function appendCardTitle(parent, row) {
    var title = document.createElement("div");
    var subtitle = document.createElement("p");

    title.className = "ai-directory-card-title";
    appendLinkOrText(title, row.tool, row.link, true);
    parent.appendChild(title);

    subtitle.className = "ai-directory-card-subtitle";
    subtitle.textContent = row.activityType;
    parent.appendChild(subtitle);
  }

  function appendCardMeta(list, label, value) {
    var row = document.createElement("div");
    var term = document.createElement("span");
    var definition = document.createElement("span");

    row.className = "ai-directory-card-row";
    term.className = "ai-directory-card-label";
    definition.className = "ai-directory-card-value";

    term.textContent = label;

    if (typeof value === "string") {
      definition.textContent = value;
    } else if (value) {
      definition.appendChild(value);
    }

    row.appendChild(term);
    row.appendChild(definition);
    list.appendChild(row);
  }

  function createTierBadge(privacyTier) {
    var badge = document.createElement("span");
    var tierNumber = privacyTier.match(/Tier (\d)/);

    badge.className = "tier-badge tier-" + (tierNumber ? tierNumber[1] : "0");
    badge.textContent = privacyTier;
    badge.title = privacyTier;
    return badge;
  }

  function createTrainingBadge(protection, note) {
    var badge = document.createElement("span");

    badge.className = "training-badge " + getTrainingClass(protection);
    badge.textContent = protection;
    if (note) {
      badge.title = note;
    }
    return badge;
  }

  function appendToolCell(tableRow, row) {
    var cell = document.createElement("td");

    cell.className = "ai-directory-col-tool";
    appendLinkOrText(cell, row.tool, row.link, true);
    tableRow.appendChild(cell);
  }

  function appendApplicationCell(tableRow, row) {
    var cell = document.createElement("td");
    cell.className = "ai-directory-child-label";
    appendLinkOrText(cell, row.application, row.link, false);
    tableRow.appendChild(cell);
  }

  function appendTextCell(tableRow, text, className) {
    var cell = document.createElement("td");

    if (className) {
      cell.className = className;
    }
    cell.textContent = text;
    tableRow.appendChild(cell);
  }

  function appendSupportCell(tableRow, supportGroup) {
    var cell = document.createElement("td");
    var check = document.createElement("span");
    var supported = supportGroup === "UNC supported";

    cell.className = "ai-directory-col-support";
    check.className = supported ? "status-check yes" : "status-check no";
    check.setAttribute("aria-hidden", "true");
    check.textContent = supported ? "✓" : "×";
    cell.setAttribute("aria-label", supportGroup);
    cell.title = supportGroup;
    cell.appendChild(check);
    tableRow.appendChild(cell);
  }

  function appendTierCell(tableRow, privacyTier) {
    var cell = document.createElement("td");
    var badge = document.createElement("span");
    var tierNumber = privacyTier.match(/Tier (\d)/);

    cell.className = "ai-directory-col-tier";
    badge.className = "tier-badge tier-" + (tierNumber ? tierNumber[1] : "0");
    badge.textContent = tierNumber ? tierNumber[1] : "?";
    badge.title = privacyTier;
    cell.appendChild(badge);
    tableRow.appendChild(cell);
  }

  function appendTrainingCell(tableRow, protection, note) {
    var cell = document.createElement("td");
    var mark = document.createElement("span");

    cell.className = "ai-directory-col-training";
    mark.className = "status-check " + getTrainingStateClass(protection);
    mark.setAttribute("aria-hidden", "true");
    mark.textContent = getTrainingSymbol(protection);
    cell.setAttribute("aria-label", protection);
    cell.title = note || protection;
    cell.appendChild(mark);
    tableRow.appendChild(cell);
  }

  function getColumnClass(header) {
    if (header === "Tool") {
      return "ai-directory-col-tool";
    }
    if (header === "Activity Type") {
      return "ai-directory-col-activity";
    }
    if (header === "UNC Support") {
      return "ai-directory-col-support";
    }
    if (header === "UNC Tier / FERPA") {
      return "ai-directory-col-tier";
    }
    if (header === "Training Protection") {
      return "ai-directory-col-training";
    }
    if (header === "Summary") {
      return "ai-directory-col-summary";
    }
    return "";
  }

  function getTrainingSymbol(protection) {
    if (protection === "Protected") {
      return "✓";
    }
    if (protection === "Not protected") {
      return "×";
    }
    return "?";
  }

  function getTrainingStateClass(protection) {
    if (protection === "Protected") {
      return "yes";
    }
    if (protection === "Not protected") {
      return "no";
    }
    return "unknown";
  }

  function appendLinkOrText(parent, text, href, strong) {
    var element = href ? document.createElement("a") : document.createElement("span");
    var wrapper = strong ? document.createElement("strong") : null;

    element.textContent = text;
    if (href) {
      element.href = href;
    }

    if (wrapper) {
      wrapper.appendChild(element);
      parent.appendChild(wrapper);
    } else {
      parent.appendChild(element);
    }
  }

  function getOrderedGroups(sourceRows, field, order) {
    var grouped = new Map();

    sourceRows.forEach(function (row) {
      var key = row[field] || "Unspecified";
      if (!grouped.has(key)) {
        grouped.set(key, []);
      }
      grouped.get(key).push(row);
    });

    return Array.from(grouped.entries()).sort(function (left, right) {
      var leftIndex = order.indexOf(left[0]);
      var rightIndex = order.indexOf(right[0]);
      var normalizedLeft = leftIndex === -1 ? Number.MAX_SAFE_INTEGER : leftIndex;
      var normalizedRight = rightIndex === -1 ? Number.MAX_SAFE_INTEGER : rightIndex;

      if (normalizedLeft !== normalizedRight) {
        return normalizedLeft - normalizedRight;
      }
      return left[0].localeCompare(right[0]);
    });
  }

  function getParentGroups(sourceRows) {
    var grouped = new Map();

    sortRows(sourceRows).forEach(function (row) {
      var key = row.displayGroup || row.parentTool || row.tool;
      if (!grouped.has(key)) {
        grouped.set(key, []);
      }
      grouped.get(key).push(row);
    });

    return Array.from(grouped.entries());
  }

  function sortRows(sourceRows) {
    return sourceRows.slice().sort(function (left, right) {
      if (left.sortOrder !== right.sortOrder) {
        return left.sortOrder - right.sortOrder;
      }
      return (left.tool + left.application).localeCompare(right.tool + right.application);
    });
  }

  function getTrainingClass(protection) {
    if (protection === "Protected") {
      return "training-protected";
    }
    if (protection === "Not protected") {
      return "training-not-protected";
    }
    return "training-conditional";
  }

  function normalizeActivityType(activityType) {
    if (activityType === "Instructor planning") {
      return "Planning";
    }
    if (activityType === "Assessment and grading") {
      return "Assessment";
    }
    if (activityType === "Meeting support" || activityType === "Canvas course workflow") {
      return "Administrative";
    }
    if (activityType === "Student study support" || activityType === "Course agents") {
      return "Student Tools";
    }
    if (activityType === "AI chat") {
      return "Chat";
    }
    if (activityType === "Visual and media creation") {
      return "Media Creation";
    }
    return activityType || "Unspecified";
  }

  function normalizeTrainingProtection(trainingProtection) {
    if (trainingProtection === "Conditional / unclear") {
      return "Unknown";
    }
    return trainingProtection || "Unknown";
  }
})();
