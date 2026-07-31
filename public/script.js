$(function () {
  const personas = [
    {
      title: "CTOs & Tech Leaders",
      desc: "Drive digital strategy, modernize infrastructure, and build scalable technology ecosystems.",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Product Managers",
      desc: "Turn product vision into reality with agile engineering, rapid prototyping, and data-driven iteration.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Enterprise Teams",
      desc: "Scale operations with cloud migration, automation, and AI-powered workflow optimization.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Startup Founders",
      desc: "Go from MVP to market with full-stack engineering, DevOps, and growth-ready architecture.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Data Scientists",
      desc: "Build robust data pipelines, deploy ML models at scale, and unlock actionable business intelligence.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Security Officers",
      desc: "Implement zero-trust architecture, compliance frameworks, and real-time threat detection.",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Operations Teams",
      desc: "Automate repetitive tasks, optimize IT infrastructure, and ensure 99.9% uptime with intelligent monitoring.",
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Innovation Labs",
      desc: "Explore emerging tech — generative AI, IoT, blockchain — and bring proof-of-concepts to production.",
      img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80"
    }
  ];

  const STEP_HEIGHT = 180;
  const COUNT = personas.length;

  const $section = $("#personas-section");
  const $track = $("#personas-track");
  const $flow = $("#persona-flow");
  const $dots = $("#persona-dots");
  const $progress = $("#personas-progress");
  const $nav = $(".nav");
  const $mobileNavToggle = $("#mobile-nav-toggle");
  const $mobileNavLinks = $("#mobile-nav-links");
  const $pricingTrigger = $("#pricing-trigger");
  const $pricingMega = $("#pricing-mega");
  const $ctaBlock = $(".cta-block").first();
  const $expeditionSection = $("#expedition-scroll");
  const $expeditionCards = $expeditionSection.find(".expedition-card");
  const $expeditionBgA = $expeditionSection.find(".expedition-scroll__bg--a");
  const $expeditionBgB = $expeditionSection.find(".expedition-scroll__bg--b");
  const $expeditionMeter = $expeditionSection.find(".expedition-scroll__meter span");
  const $expeditionLeft = $expeditionSection.find(".expedition-scroll__left");
  const $expeditionKicker = $("#expedition-kicker");
  const $expeditionTitle = $("#expedition-title");
  const $expeditionCopy = $("#expedition-copy");
  let expeditionBgLayer = 0;
  let expeditionBgUrl = "";
  let expeditionTextIndex = -1;
  let expeditionTextTimer = null;
  let expeditionAutoTimer = null;
  let expeditionAutoActive = false;
  let expeditionAutoIndex = 0;
  let expeditionCompleted = false;
  const EXPEDITION_AUTO_DELAY = 3000;

  // ── Intro scroll section ────────────────────────────────
  const $introScroll = $("#intro-scroll");
  const $introText1 = $("#intro-text-1");
  const $introText2 = $("#intro-text-2");
  let introWords1 = [];
  let introWords2 = [];

  // Wrap each word in a span for color animation
  function wrapIntroWords($el) {
    const text = $el.text().trim();
    const words = text.split(/\s+/);
    $el.html(words.map(function(w) { return '<span class="word">' + w + '</span>'; }).join(' '));
    return $el.find('.word');
  }

  if ($introText1.length) { introWords1 = wrapIntroWords($introText1); }
  if ($introText2.length) { introWords2 = wrapIntroWords($introText2); }

  function syncIntroScrollHeight() {
    if (!$introScroll.length) { return; }
    $introScroll.find(".intro-scroll__track").css("height", (window.innerHeight * 2.2).toFixed(0) + "px");
  }

  function lerp(a, b, t) { return a + (b - a) * Math.max(0, Math.min(1, t)); }

  const $introPin = $("#intro-pin");

  function updateIntroScroll() {
    if (!$introScroll.length) { return; }
    const top = $introScroll.offset().top;
    const height = $introScroll.outerHeight();
    const range = Math.max(1, height - window.innerHeight);
    const p = Math.max(0, Math.min(1, (window.scrollY - top) / range));

    // Show/hide SVG illustration + grid
    if (p > 0.02) {
      $introPin.addClass('imgs-visible');
    } else {
      $introPin.removeClass('imgs-visible');
    }

    // Update progress bar
    var $bar = document.getElementById('intro-progress-bar');
    if ($bar) { $bar.style.width = (p * 100).toFixed(1) + '%'; }

    // Skip text updates when auto-play is handling it
    if (introAutoActive) return;

    // Phase 1 (p 0→0.48): Show text 1, color words progressively
    // Phase 2 (p 0.52→1): Show text 2, color words + rotate illustration
    if (p < 0.50) {
      $introPin.removeClass('phase-2');
      $introText1.addClass('intro-scroll__text--active');
      $introText2.removeClass('intro-scroll__text--active');
      var wordProgress1 = Math.max(0, Math.min(1, (p - 0.05) / 0.40));
      var litCount1 = Math.round(wordProgress1 * introWords1.length);
      introWords1.each(function(i) {
        if (i < litCount1) { $(this).addClass('lit'); }
        else { $(this).removeClass('lit'); }
      });
    } else {
      $introPin.addClass('phase-2');
      $introText1.removeClass('intro-scroll__text--active');
      $introText2.addClass('intro-scroll__text--active');
      var wordProgress2 = Math.max(0, Math.min(1, (p - 0.55) / 0.40));
      var litCount2 = Math.round(wordProgress2 * introWords2.length);
      introWords2.each(function(i) {
        if (i < litCount2) { $(this).addClass('lit'); }
        else { $(this).removeClass('lit'); }
      });
    }

    // Scroll reached last text fully — jump
    if (p >= 0.92 && !introCompleted) {
      introJumpToNext();
    }
  }
  // ── /Intro scroll section ───────────────────────────────

  // ── Intro auto-advance ──────────────────────────────────
  var introAutoTimer = null;
  var introAutoActive = false;
  var introCompleted = false;
  var introScrollTimeout = null;
  var introAutoPhase = 0;        // 0 = text1 words, 1 = switch to text2, 2 = text2 words, 3 = done
  var introAutoWordIdx = 0;
  const INTRO_WORD_INTERVAL = 250;  // ms per word reveal
  const INTRO_PHASE_PAUSE = 800;    // pause between phases

  function isIntroInView() {
    if (!$introScroll.length) return false;
    var rect = $introScroll[0].getBoundingClientRect();
    return rect.top <= window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5;
  }

  function introJumpToNext() {
    if (introCompleted) return;
    introCompleted = true;
    stopIntroAutoPlay();
    $(window).off("scroll.introAuto scroll.introVisibility");
    setTimeout(function () {
      var nextSection = $introScroll.next();
      if (nextSection.length) {
        $("html, body").animate({ scrollTop: nextSection.offset().top }, 800, "swing");
      }
    }, 1000);
  }

  function runIntroAuto() {
    if (introCompleted) return;

    if (introAutoPhase === 0) {
      // Reveal text1 words one by one
      $introPin.removeClass('phase-2');
      $introText1.addClass('intro-scroll__text--active');
      $introText2.removeClass('intro-scroll__text--active');
      if (introAutoWordIdx < introWords1.length) {
        $(introWords1[introAutoWordIdx]).addClass('lit');
        introAutoWordIdx++;
      } else {
        // All text1 words done, pause then switch
        introAutoPhase = 1;
        introAutoWordIdx = 0;
        clearInterval(introAutoTimer);
        introAutoTimer = setTimeout(function () {
          if (introCompleted) return;
          introAutoPhase = 2;
          introAutoTimer = setInterval(runIntroAuto, INTRO_WORD_INTERVAL);
        }, INTRO_PHASE_PAUSE);
        return;
      }
    } else if (introAutoPhase === 2) {
      // Switch to text2 and reveal words
      $introPin.addClass('phase-2');
      $introText1.removeClass('intro-scroll__text--active');
      $introText2.addClass('intro-scroll__text--active');
      if (introAutoWordIdx < introWords2.length) {
        $(introWords2[introAutoWordIdx]).addClass('lit');
        introAutoWordIdx++;
      } else {
        // All text2 words done — jump to next section
        clearInterval(introAutoTimer);
        introAutoTimer = null;
        introJumpToNext();
        return;
      }
    }
  }

  function startIntroAutoPlay() {
    if (introAutoActive || introCompleted) return;
    introAutoActive = true;
    // Show SVG illustration
    $introPin.addClass('imgs-visible');
    introAutoTimer = setInterval(runIntroAuto, INTRO_WORD_INTERVAL);
  }

  function stopIntroAutoPlay() {
    if (!introAutoActive) return;
    introAutoActive = false;
    if (introAutoTimer) {
      clearInterval(introAutoTimer);
      clearTimeout(introAutoTimer);
      introAutoTimer = null;
    }
  }

  function resetIntroAutoAfterScroll() {
    if (introCompleted) return;
    stopIntroAutoPlay();
    if (introScrollTimeout) clearTimeout(introScrollTimeout);
    introScrollTimeout = setTimeout(function () {
      if (introCompleted) return;
      if (isIntroInView()) {
        // Sync phase with scroll position
        var top = $introScroll.offset().top;
        var height = $introScroll.outerHeight();
        var range = Math.max(1, height - window.innerHeight);
        var p = Math.max(0, Math.min(1, (window.scrollY - top) / range));
        if (p >= 0.50) {
          introAutoPhase = 2;
          introAutoWordIdx = Math.round(Math.max(0, Math.min(1, (p - 0.55) / 0.40)) * introWords2.length);
        } else {
          introAutoPhase = 0;
          introAutoWordIdx = Math.round(Math.max(0, Math.min(1, (p - 0.05) / 0.40)) * introWords1.length);
        }
        startIntroAutoPlay();
      }
    }, 2000);
  }

  $(window).on("scroll.introAuto", resetIntroAutoAfterScroll);

  function checkIntroVisibility() {
    if (introCompleted) return;
    if (isIntroInView() && !introAutoActive && !introScrollTimeout) {
      startIntroAutoPlay();
    } else if (!isIntroInView() && introAutoActive) {
      stopIntroAutoPlay();
    }
  }
  $(window).on("scroll.introVisibility", checkIntroVisibility);
  // ── /Intro auto-advance ─────────────────────────────────

  // ── Editorial slider section ─────────────────────────────
  var $editorialSection = $("#editorial-section");
  var $editorialStrip = $("#editorial-strip");
  var $editorialCards = $editorialStrip.find(".editorial__card");
  var $editorialBar = $("#editorial-bar");
  var $editorialStepNum = $("#editorial-step-num");
  var editorialCount = $editorialCards.length;
  var editorialAutoTimer = null;
  var editorialAutoActive = false;
  var editorialAutoIndex = 0;
  var editorialCompleted = false;
  var editorialAnimating = false; // debounce flag
  const EDITORIAL_AUTO_DELAY = 5000;

  function syncEditorialHeight() {
    // No track needed — scroll-locked slider, section is just 100vh
  }

  function updateEditorialScroll() {
    // Slider is scroll-gesture driven, no continuous scroll logic
  }

  function isEditorialInView() {
    if (!$editorialSection.length) return false;
    var rect = $editorialSection[0].getBoundingClientRect();
    return rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5;
  }

  function applyEditorialSlide(index) {
    if (index >= editorialCount) index = editorialCount - 1;
    if (index < 0) index = 0;
    editorialAutoIndex = index;

    // Slide strip to show the correct card
    var tx = index * 100;
    $editorialStrip.css({
      transform: "translateX(-" + tx + "vw)",
      transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
    });

    // Update progress bar
    var progress = editorialCount > 1 ? index / (editorialCount - 1) : 0;
    if ($editorialBar.length) $editorialBar.css({ width: (progress * 100).toFixed(1) + "%", transition: "width 0.8s ease" });

    // Update step number
    if ($editorialStepNum.length) $editorialStepNum.text(String(index + 1).padStart(2, "0"));

    // Update active card
    $editorialCards.removeClass("is-active");
    $editorialCards.eq(index).addClass("is-active");

    // Debounce: block next advance for 900ms (transition duration)
    editorialAnimating = true;
    setTimeout(function () { editorialAnimating = false; }, 900);
  }

  function editorialJumpToNext() {
    if (editorialCompleted) return;
    editorialCompleted = true;
    editorialAutoActive = false;
    if (editorialAutoTimer) { clearInterval(editorialAutoTimer); editorialAutoTimer = null; }
    editorialUnlockScroll();
    $(window).off("scroll.editorialVisibility");
    setTimeout(function () {
      var next = $editorialSection.nextAll(':visible').first();
      if (next.length) {
        $("html, body").animate({ scrollTop: next.offset().top }, 800, "swing");
      }
    }, 600);
  }

  // Scroll-lock: intercept wheel/touch and advance cards one-by-one
  function editorialWheelHandler(e) {
    e.preventDefault();
    if (editorialAnimating || editorialCompleted) return;

    var delta = e.deltaY || e.detail || 0;
    if (delta > 0) {
      // Scroll down → next card
      editorialAutoIndex++;
      if (editorialAutoIndex >= editorialCount) {
        editorialAutoIndex = editorialCount - 1;
        applyEditorialSlide(editorialAutoIndex);
        editorialJumpToNext();
        return;
      }
      applyEditorialSlide(editorialAutoIndex);
      editorialResetTimer();
    } else if (delta < 0) {
      // Scroll up → previous card or escape to previous section
      if (editorialAutoIndex > 0) {
        editorialAutoIndex--;
        applyEditorialSlide(editorialAutoIndex);
        editorialResetTimer();
      } else {
        // On first slide scrolling up: unlock and go to previous section
        editorialCompleted = true;
        editorialAutoActive = false;
        if (editorialAutoTimer) { clearInterval(editorialAutoTimer); editorialAutoTimer = null; }
        editorialUnlockScroll();
        $(window).off("scroll.editorialVisibility");
        var prev = $editorialSection.prevAll(':visible').first();
        if (prev.length) {
          var target = prev.offset().top + prev.outerHeight() - window.innerHeight;
          $("html, body").animate({ scrollTop: Math.max(0, target) }, 600, "swing");
        }
      }
    }
  }

  var editorialTouchStartY = 0;
  function editorialTouchStartHandler(e) {
    editorialTouchStartY = e.touches[0].clientY;
  }
  function editorialTouchMoveHandler(e) {
    e.preventDefault();
    if (editorialAnimating || editorialCompleted) return;
    var dy = editorialTouchStartY - e.touches[0].clientY;
    if (Math.abs(dy) < 30) return;
    editorialTouchStartY = e.touches[0].clientY;

    if (dy > 0) {
      editorialAutoIndex++;
      if (editorialAutoIndex >= editorialCount) {
        editorialAutoIndex = editorialCount - 1;
        applyEditorialSlide(editorialAutoIndex);
        editorialJumpToNext();
        return;
      }
      applyEditorialSlide(editorialAutoIndex);
      editorialResetTimer();
    } else {
      if (editorialAutoIndex > 0) {
        editorialAutoIndex--;
        applyEditorialSlide(editorialAutoIndex);
        editorialResetTimer();
      } else {
        editorialCompleted = true;
        editorialAutoActive = false;
        if (editorialAutoTimer) { clearInterval(editorialAutoTimer); editorialAutoTimer = null; }
        editorialUnlockScroll();
        $(window).off("scroll.editorialVisibility");
        var prev = $editorialSection.prevAll(':visible').first();
        if (prev.length) {
          var target = prev.offset().top + prev.outerHeight() - window.innerHeight;
          $("html, body").animate({ scrollTop: Math.max(0, target) }, 600, "swing");
        }
      }
    }
  }

  function editorialLockScroll() {
    var sectionTop = $editorialSection.offset().top;
    var currentScroll = window.scrollY;
    var diff = Math.abs(currentScroll - sectionTop);
    if (diff > 5 && diff < window.innerHeight * 0.4) {
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    } else if (diff >= window.innerHeight * 0.4) {
      window.scrollTo({ top: sectionTop, behavior: "instant" });
    }
    window.addEventListener("wheel", editorialWheelHandler, { passive: false });
    window.addEventListener("touchstart", editorialTouchStartHandler, { passive: true });
    window.addEventListener("touchmove", editorialTouchMoveHandler, { passive: false });
  }
  function editorialUnlockScroll() {
    window.removeEventListener("wheel", editorialWheelHandler);
    window.removeEventListener("touchstart", editorialTouchStartHandler);
    window.removeEventListener("touchmove", editorialTouchMoveHandler);
  }

  // Reset and restart the auto-advance timer
  function editorialResetTimer() {
    if (editorialAutoTimer) { clearInterval(editorialAutoTimer); editorialAutoTimer = null; }
    if (editorialCompleted) return;
    editorialAutoTimer = setInterval(function () {
      if (editorialCompleted || editorialAnimating) return;
      editorialAutoIndex++;
      if (editorialAutoIndex >= editorialCount) {
        editorialAutoIndex = editorialCount - 1;
        applyEditorialSlide(editorialAutoIndex);
        editorialJumpToNext();
        return;
      }
      applyEditorialSlide(editorialAutoIndex);
    }, EDITORIAL_AUTO_DELAY);
  }

  function startEditorialAutoPlay() {
    if (editorialAutoActive || editorialCompleted) return;
    if (window.innerWidth <= 480) return; // mobile: no scroll-lock
    editorialAutoActive = true;
    editorialAutoIndex = 0;
    applyEditorialSlide(0);
    editorialLockScroll();
    editorialResetTimer();
  }

  function checkEditorialVisibility() {
    if (editorialCompleted || editorialAutoActive) return;
    if (window.innerWidth <= 480) return; // mobile: skip
    if (isEditorialInView()) {
      startEditorialAutoPlay();
    }
  }
  $(window).on("scroll.editorialVisibility", checkEditorialVisibility);
  // ── /Editorial slider section ───────────────────────────

  const $storySection = $("#story-scroll");
  const $storyBg = $storySection.find(".story-scroll__bg");
  const $storyItems = $storySection.find(".story-scroll__item");
  const $storyMeter = $storySection.find(".story-scroll__meter span");
  const $praiseSection = $("#praise-scroll");
  const $praiseTitle = $("#praise-title");
  const $praiseCards = $praiseSection.find(".praise-card");
  const $praiseGlow = $praiseSection.find(".praise-scroll__glow");
  const $praiseCta = $praiseSection.find(".praise-scroll__cta");
  let praiseWordNodes = [];

  // Left blobs: roll in from left edge
  const storyBlobsL = [
    { el: $storySection.find(".story-scroll__blob--l1"), offsetX: -380, depth: 1.0, spin: -1 },
    { el: $storySection.find(".story-scroll__blob--l2"), offsetX: -180, depth: 0.7, spin: 1 },
    { el: $storySection.find(".story-scroll__blob--l3"), offsetX: -140, depth: 0.5, spin: -1 }
  ];
  // Right blobs: roll in from right edge
  const storyBlobsR = [
    { el: $storySection.find(".story-scroll__blob--r1"), offsetX: 340, depth: 1.0, spin: 1 },
    { el: $storySection.find(".story-scroll__blob--r2"), offsetX: 160, depth: 0.7, spin: -1 },
    { el: $storySection.find(".story-scroll__blob--r3"), offsetX: 100, depth: 0.5, spin: 1 }
  ];

  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  window.scrollTo(0, 0);

  let activeIndex = 0;
  let isTicking = false;
  const STORY_STEP = 250;

  function build() {
    const trackHeight = COUNT * STEP_HEIGHT + window.innerHeight * 0.5;
    $track.css("height", trackHeight + "px");

    personas.forEach(function (item, idx) {
      $flow.append(
        '<article class="persona-flow__item" data-idx="' + idx + '">' +
        '<figure class="persona-flow__photo">' +
        '<img src="' + item.img + '" alt="' + item.title + ' portrait" loading="lazy" />' +
        "</figure>" +
        '<div class="persona-flow__copy">' +
        '<h2 class="persona-flow__title">' + item.title + "</h2>" +
        '<p class="persona-flow__desc">' + item.desc + "</p>" +
        "</div>" +
        "</article>"
      );

      $dots.append(
        '<button type="button" data-idx="' + idx + '" aria-label="Go to ' + item.title + '"></button>'
      );

      $progress.append('<span data-idx="' + idx + '"></span>');
    });
  }

  function clampIndex(index) {
    return Math.max(0, Math.min(COUNT - 1, index));
  }

  function getSectionTop() {
    return $section.offset().top;
  }

  function scrollToIndex(index) {
    const targetIndex = clampIndex(index);
    const targetY = getSectionTop() + targetIndex * STEP_HEIGHT;
    $("html, body").stop(true).animate({ scrollTop: targetY }, 460, "swing");
  }

  function updateIndicators(index) {
    activeIndex = clampIndex(index);

    $dots.children("button").each(function () {
      const idx = Number($(this).attr("data-idx"));
      $(this)
        .toggleClass("is-active", idx === activeIndex)
        .attr("aria-current", idx === activeIndex ? "true" : "false");
    });

    $progress.children("span").each(function () {
      const idx = Number($(this).attr("data-idx"));
      $(this).toggleClass("is-active", idx === activeIndex);
    });
  }

  function updateFlow(progress) {
    const curvePeakX = 50;
    const curveFalloff = 0.0006;
    const visibilityRange = 320;
    const frontlineIndex = Math.round(progress);

    $flow.children(".persona-flow__item").each(function () {
      const idx = Number($(this).attr("data-idx"));
      const relative = idx - progress;
      const y = relative * 220;
      const absY = Math.abs(y);

      const x = curvePeakX - curveFalloff * y * y;
      const opacity = Math.pow(Math.max(0, 1 - absY / visibilityRange), 1.8);
      const scale = 0.88 + Math.max(0, 1 - absY / 380) * 0.12;
      const depth = 100 - Math.round(absY);
      const splitStrength = Math.max(0, 1 - absY / 380);
      const photoShift = -30 - x * 0.2 * splitStrength;
      const copyShift = 30 + x * 0.2 * splitStrength;
      const photoArcY = Math.sin(relative * 1.1) * 6 * splitStrength;
      const copyArcY = -Math.sin(relative * 1.1) * 4 * splitStrength;

      $(this).css({
        opacity: opacity,
        transform: "translate(calc(-50% + " + x.toFixed(1) + "px), calc(-50% + " + y.toFixed(1) + "px)) scale(" + scale.toFixed(3) + ")",
        zIndex: depth
      });

      $(this).toggleClass("is-frontline", idx === frontlineIndex);

      $(this)
        .find(".persona-flow__photo")
        .css("transform", "translate(" + photoShift.toFixed(1) + "px, " + photoArcY.toFixed(1) + "px)");

      $(this)
        .find(".persona-flow__copy")
        .css("transform", "translate(" + copyShift.toFixed(1) + "px, " + copyArcY.toFixed(1) + "px)");
    });

    updateIndicators(Math.round(progress));
  }

  function onScroll() {
    const sectionTop = getSectionTop();
    const relative = Math.max(0, window.scrollY - sectionTop);
    const maxProgress = COUNT - 1;
    const progress = Math.min(maxProgress, relative / STEP_HEIGHT);
    updateFlow(progress);
  }

  function requestScrollUpdate() {
    if (isTicking) {
      return;
    }
    isTicking = true;
    requestAnimationFrame(function () {
      onScroll();
      isTicking = false;
    });
  }

  function isSectionInView() {
    const rect = $section[0].getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  function bindEvents() {
    $(window).on("scroll", function () {
      requestScrollUpdate();
      updateIntroScroll();
      updateCtaAbstractScroll();
      updateExpeditionScroll();
      updatePraiseScroll();
    });

    $(window).on("resize", function () {
      const trackHeight = COUNT * STEP_HEIGHT + window.innerHeight * 0.5;
      $track.css("height", trackHeight + "px");
      syncMegaMenuTop();
      syncStoryHeight();
      syncIntroScrollHeight();
      syncEditorialHeight();
      syncExpeditionScrollHeight();
      syncPraiseScrollHeight();
      updateStoryScroll();
      updateIntroScroll();
      updateCtaAbstractScroll();
      updateExpeditionScroll();
      updatePraiseScroll();
      requestScrollUpdate();
    });

    $dots.on("click", "button", function () {
      const idx = Number($(this).attr("data-idx"));
      scrollToIndex(idx);
    });

    $(document).on("keydown", function (event) {
      if (!isSectionInView()) {
        return;
      }

      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        event.preventDefault();
        scrollToIndex(activeIndex + 1);
      }

      if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        event.preventDefault();
        scrollToIndex(activeIndex - 1);
      }
    });

    $flow.on("mousemove", ".persona-flow__photo", function (event) {
      const $item = $(this).closest(".persona-flow__item");
      const idx = Number($item.attr("data-idx"));
      if (idx !== activeIndex) {
        return;
      }

      const $photo = $(this);
      const $activeImage = $photo.find("img");

      const rect = this.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const rotateY = (x - 0.5) * 8;
      const rotateX = (0.5 - y) * 8;
      const tiltX = rotateX.toFixed(2);
      const tiltY = rotateY.toFixed(2);

      $activeImage.css("transform", "scale(1.03) rotateX(" + tiltX + "deg) rotateY(" + tiltY + "deg)");
    });

    $flow.on("mouseleave", ".persona-flow__photo", function () {
      $(this).find("img").css("transform", "scale(1) rotateX(0deg) rotateY(0deg)");
    });

    $pricingTrigger.on("click", function (event) {
      event.preventDefault();
      const isOpen = $pricingMega.hasClass("is-open");
      $pricingMega.toggleClass("is-open", !isOpen);
      $("body").toggleClass("body--menu-open", !isOpen);
      $pricingTrigger.toggleClass("is-active", !isOpen);
      $pricingTrigger.attr("aria-expanded", String(!isOpen));
      $pricingMega.attr("aria-hidden", String(isOpen));
      // Force scrolled nav style BEFORE measuring height so mega menu aligns
      if (!isOpen) {
        $nav.addClass("nav--scrolled");
      } else {
        updateNavState();
      }
      syncMegaMenuTop();
    });

    $("#mega-menu-close").on("click", function () {
      $pricingMega.removeClass("is-open");
      $("body").removeClass("body--menu-open");
      $pricingTrigger.removeClass("is-active");
      $pricingTrigger.attr("aria-expanded", "false");
      updateNavState();
      $pricingMega.attr("aria-hidden", "true");
    });

    $mobileNavToggle.on("click", function () {
      const shouldOpen = !$nav.hasClass("nav--mobile-open");
      $nav.toggleClass("nav--mobile-open", shouldOpen);
      $mobileNavToggle.attr("aria-expanded", String(shouldOpen));
      $mobileNavToggle.attr("aria-label", shouldOpen ? "Close navigation" : "Open navigation");
    });

    $mobileNavLinks.on("click", "a", function () {
      $nav.removeClass("nav--mobile-open");
      $mobileNavToggle.attr("aria-expanded", "false");
      $mobileNavToggle.attr("aria-label", "Open navigation");
    });

    $(document).on("click", function (event) {
      const clickedInsideMega = $(event.target).closest("#pricing-mega, #pricing-trigger").length > 0;
      if (!clickedInsideMega) {
        $pricingMega.removeClass("is-open");
        $("body").removeClass("body--menu-open");
        $pricingTrigger.removeClass("is-active").attr("aria-expanded", "false");
        $pricingMega.attr("aria-hidden", "true");
        updateNavState();
      }

      const clickedInsideMobileNav = $(event.target).closest("#mobile-nav-toggle, #mobile-nav-links").length > 0;
      if (clickedInsideMobileNav) {
        return;
      }

      $nav.removeClass("nav--mobile-open");
      $mobileNavToggle.attr("aria-expanded", "false");
      $mobileNavToggle.attr("aria-label", "Open navigation");
    });

    $(document).on("keydown", function (event) {
      if (event.key !== "Escape") {
        return;
      }

      $nav.removeClass("nav--mobile-open");
      $mobileNavToggle.attr("aria-expanded", "false");
      $mobileNavToggle.attr("aria-label", "Open navigation");

      $pricingMega.removeClass("is-open");
      $("body").removeClass("body--menu-open");
      $pricingTrigger.removeClass("is-active").attr("aria-expanded", "false");
      $pricingMega.attr("aria-hidden", "true");
      updateNavState();
    });

    $(window).on("resize", function () {
      if (window.innerWidth > 980) {
        $nav.removeClass("nav--mobile-open");
        $mobileNavToggle.attr("aria-expanded", "false");
        $mobileNavToggle.attr("aria-label", "Open navigation");
      }
    });
  }

  function syncStoryHeight() {
    if (!$storySection.length) {
      return;
    }
    const total = window.innerHeight + $storyItems.length * STORY_STEP;
    $storySection.css("--story-scroll-height", total.toFixed(0) + "px");
  }

  function updateStoryScroll() {
    if (!$storySection.length) {
      return;
    }

    const top = $storySection.offset().top;
    const height = $storySection.outerHeight();
    const range = Math.max(1, height - window.innerHeight);
    const progress = Math.max(0, Math.min(1, (window.scrollY - top) / range));
    const eased = progress * progress * (3 - 2 * progress);

    // Blue field appears mid-scroll and disappears near edges.
    const bgOpacity = Math.pow(Math.max(0, Math.sin(eased * Math.PI)), 0.82);
    $storyBg.css("opacity", (bgOpacity * 0.96).toFixed(3));
    $storySection.css("--story-progress", bgOpacity.toFixed(3));

    // Particles, orbit, and streaks: visible as soon as section is on screen
    const inView = progress > 0 ? 1 : 0;
    $storySection.find(".story-scroll__particles .story-scroll__particle").css("opacity", (inView * 0.9).toFixed(3));
    $storySection.find(".story-scroll__orbit").css("opacity", (inView * 0.7).toFixed(3));
    $storySection.find(".story-scroll__streak").css("opacity", (inView * 0.5).toFixed(3));

    // Skip text/meter updates if auto-play slider is active
    if (storyAutoActive) {
      // Show blobs fully when auto-play is running (section is in view)
      var autoRollIn = 1;
      var autoRollOut = 1;
      storyBlobsL.forEach(function (b) {
        var travel = b.offsetX * (1 - autoRollIn);
        var deg = b.spin * autoRollIn * 180;
        var op = (autoRollIn * autoRollOut * b.depth * 0.92).toFixed(3);
        b.el.css({ transform: "translateY(-50%) translateX(" + travel.toFixed(1) + "px) rotate(" + deg.toFixed(1) + "deg)", opacity: op, transition: "transform 0.8s ease, opacity 0.8s ease" });
      });
      storyBlobsR.forEach(function (b) {
        var travel = b.offsetX * (1 - autoRollIn);
        var deg = b.spin * autoRollIn * 160;
        var op = (autoRollIn * autoRollOut * b.depth * 0.86).toFixed(3);
        b.el.css({ transform: "translateY(-50%) translateX(" + travel.toFixed(1) + "px) rotate(" + deg.toFixed(1) + "deg)", opacity: op, transition: "transform 0.8s ease, opacity 0.8s ease" });
      });
      // Also show particles/orbit/streaks when auto-playing
      $storySection.find(".story-scroll__particles .story-scroll__particle").css({ opacity: "0.9", transition: "opacity 0.8s ease" });
      $storySection.find(".story-scroll__orbit").css({ opacity: "0.7", transition: "opacity 0.8s ease" });
      $storySection.find(".story-scroll__streak").css({ opacity: "0.5", transition: "opacity 0.8s ease" });
      // Show background
      $storyBg.css({ opacity: "0.96", transition: "opacity 0.8s ease" });
      $storySection.css("--story-progress", "1");
      return;
    }

    const itemProgress = eased * ($storyItems.length - 1);
    $storyItems.each(function () {
      const idx = $storyItems.index(this);
      const dist = idx - itemProgress;
      const absDist = Math.abs(dist);
      const opacity = absDist >= 0.6 ? 0 : Math.pow(Math.max(0, 1 - absDist * 2.2), 2.5);
      const y = dist * 80;
      const scale = absDist >= 0.6 ? 0.9 : 1 - Math.min(0.1, absDist * 0.15);
      const blur = absDist >= 0.6 ? 4 : Math.min(3, absDist * 6);
      const z = 200 - Math.round(absDist * 100);

      $(this).css({
        opacity: opacity.toFixed(3),
        transform: "translate(-50%, calc(-50% + " + y.toFixed(1) + "px)) scale(" + scale.toFixed(3) + ")",
        filter: "blur(" + blur.toFixed(2) + "px)",
        zIndex: z,
        visibility: absDist >= 1 ? "hidden" : "visible"
      });

      if (absDist < 0.25) {
        $(this).addClass("is-active");
      } else {
        $(this).removeClass("is-active");
      }
    });

    // Blobs appear instantly on entry
    const rollIn = Math.min(1, progress * 20);
    const rollOut = Math.min(1, (1 - progress) * 20);

    storyBlobsL.forEach(function (b) {
      const travel = b.offsetX * (1 - rollIn);
      const deg = b.spin * rollIn * 180;
      const op = (rollIn * rollOut * b.depth * 0.92).toFixed(3);
      b.el.css({
        transform: "translateY(-50%) translateX(" + travel.toFixed(1) + "px) rotate(" + deg.toFixed(1) + "deg)",
        opacity: op
      });
    });

    storyBlobsR.forEach(function (b) {
      const travel = b.offsetX * (1 - rollIn);
      const deg = b.spin * rollIn * 160;
      const op = (rollIn * rollOut * b.depth * 0.86).toFixed(3);
      b.el.css({
        transform: "translateY(-50%) translateX(" + travel.toFixed(1) + "px) rotate(" + deg.toFixed(1) + "deg)",
        opacity: op
      });
    });

    if ($storyMeter.length) {
      const active = Math.floor(itemProgress);
      const fill = itemProgress - active;
      $storyMeter.each(function (idx) {
        $(this)
          .toggleClass("is-active", idx < active)
          .toggleClass("is-current", idx === active)
          .css("--fill", idx === active ? fill.toFixed(3) : (idx < active ? 1 : 0));
      });
    }

    // When scroll reaches last paragraph, mark done and jump
    if (progress >= 0.92 && !storyCompleted) {
      storyJumpToNext();
    }
  }

  // ── Story auto-advance slider ───────────────────────────
  var storyAutoTimer = null;
  var storyAutoIndex = 0;
  var storyAutoActive = false;
  var storyScrollTimeout = null;
  var storyCompleted = false;
  var storyJumpTimeout = null;
  const STORY_AUTO_DELAY = 2200;

  function storyJumpToNext() {
    if (storyCompleted) return;
    storyCompleted = true;
    if (storyAutoTimer) { clearInterval(storyAutoTimer); storyAutoTimer = null; }
    if (storyScrollTimeout) { clearTimeout(storyScrollTimeout); storyScrollTimeout = null; }
    if (storyJumpTimeout) { clearTimeout(storyJumpTimeout); }
    storyAutoActive = false;
    $(window).off("scroll.storyAuto scroll.storyVisibility");
    storyJumpTimeout = setTimeout(function () {
      // Find next visible section (skip display:none)
      var next = $storySection.nextAll(':visible').first();
      if (next.length) {
        $("html, body").animate({ scrollTop: next.offset().top }, 800, "swing");
      }
    }, 1200);
  }

  function isStorySectionInView() {
    if (!$storySection.length) return false;
    var rect = $storySection[0].getBoundingClientRect();
    // Section is "in view" when pinned (top near 0)
    return rect.top <= window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5;
  }

  function applyStorySlide(index) {
    var count = $storyItems.length;
    if (index >= count) index = 0;
    storyAutoIndex = index;

    $storyItems.each(function (idx) {
      var dist = idx - index;
      var absDist = Math.abs(dist);
      var isActive = idx === index;

      $(this).css({
        opacity: isActive ? "1" : "0",
        transform: isActive
          ? "translate(-50%, -50%) scale(1)"
          : "translate(-50%, calc(-50% + " + (dist * 60) + "px)) scale(0.92)",
        filter: isActive ? "blur(0px)" : "blur(4px)",
        visibility: isActive ? "visible" : "hidden",
        transition: "opacity 0.7s ease, transform 0.7s ease, filter 0.7s ease"
      });

      if (isActive) {
        $(this).addClass("is-active");
      } else {
        $(this).removeClass("is-active");
      }
    });

    if ($storyMeter.length) {
      $storyMeter.each(function (idx) {
        $(this)
          .toggleClass("is-active", idx < index)
          .toggleClass("is-current", idx === index)
          .css("--fill", idx <= index ? 1 : 0);
      });
    }
  }

  function startStoryAutoPlay() {
    if (storyAutoActive || storyCompleted) return;
    storyAutoActive = true;
    applyStorySlide(storyAutoIndex);
    $storyBg.css({ opacity: "0.96" });
    $storySection.css("--story-progress", "1");
    $storySection.find(".story-scroll__particles .story-scroll__particle").css({ opacity: "0.9" });
    $storySection.find(".story-scroll__orbit").css({ opacity: "0.7" });
    $storySection.find(".story-scroll__streak").css({ opacity: "0.5" });
    storyBlobsL.forEach(function (b) {
      b.el.css({ transform: "translateY(-50%) translateX(0px) rotate(" + (b.spin * 180) + "deg)", opacity: (b.depth * 0.92).toFixed(3) });
    });
    storyBlobsR.forEach(function (b) {
      b.el.css({ transform: "translateY(-50%) translateX(0px) rotate(" + (b.spin * 160) + "deg)", opacity: (b.depth * 0.86).toFixed(3) });
    });
    storyAutoTimer = setInterval(function () {
      if (storyCompleted) { clearInterval(storyAutoTimer); storyAutoTimer = null; return; }
      if (!isStorySectionInView()) return;
      storyAutoIndex++;
      if (storyAutoIndex >= $storyItems.length) {
        clearInterval(storyAutoTimer);
        storyAutoTimer = null;
        applyStorySlide($storyItems.length - 1);
        storyJumpToNext();
        return;
      }
      applyStorySlide(storyAutoIndex);
    }, STORY_AUTO_DELAY);
  }

  function stopStoryAutoPlay() {
    if (!storyAutoActive) return;
    storyAutoActive = false;
    if (storyAutoTimer) {
      clearInterval(storyAutoTimer);
      storyAutoTimer = null;
    }
    $storyItems.css("transition", "");
    // Remove transitions from decorative elements for scroll-driven mode
    $storyBg.css("transition", "");
    $storySection.find(".story-scroll__particles .story-scroll__particle").css("transition", "");
    $storySection.find(".story-scroll__orbit").css("transition", "");
    $storySection.find(".story-scroll__streak").css("transition", "");
    storyBlobsL.forEach(function (b) { b.el.css("transition", ""); });
    storyBlobsR.forEach(function (b) { b.el.css("transition", ""); });
  }

  function resetStoryAutoAfterScroll() {
    if (storyCompleted) return;
    if (storyScrollTimeout) clearTimeout(storyScrollTimeout);
    stopStoryAutoPlay();
    storyScrollTimeout = setTimeout(function () {
      if (storyCompleted) return;
      if (isStorySectionInView()) {
        var top = $storySection.offset().top;
        var height = $storySection.outerHeight();
        var range = Math.max(1, height - window.innerHeight);
        var progress = Math.max(0, Math.min(1, (window.scrollY - top) / range));
        var eased = progress * progress * (3 - 2 * progress);
        storyAutoIndex = Math.round(eased * ($storyItems.length - 1));
        startStoryAutoPlay();
      }
    }, 800);
  }

  $(window).on("scroll.storyAuto", resetStoryAutoAfterScroll);

  function checkStoryVisibility() {
    if (storyCompleted) return;
    if (isStorySectionInView() && !storyAutoActive && !storyScrollTimeout) {
      $storyBg.css({ opacity: "0.96" });
      $storySection.css("--story-progress", "1");
      $storySection.find(".story-scroll__particles .story-scroll__particle").css({ opacity: "0.9" });
      $storySection.find(".story-scroll__orbit").css({ opacity: "0.7" });
      $storySection.find(".story-scroll__streak").css({ opacity: "0.5" });
      storyBlobsL.forEach(function (b) {
        b.el.css({ transform: "translateY(-50%) translateX(0px) rotate(" + (b.spin * 180) + "deg)", opacity: (b.depth * 0.92).toFixed(3) });
      });
      storyBlobsR.forEach(function (b) {
        b.el.css({ transform: "translateY(-50%) translateX(0px) rotate(" + (b.spin * 160) + "deg)", opacity: (b.depth * 0.86).toFixed(3) });
      });
      startStoryAutoPlay();
    } else if (!isStorySectionInView() && storyAutoActive) {
      stopStoryAutoPlay();
    }
  }
  $(window).on("scroll.storyVisibility", checkStoryVisibility);
  // Initial check immediately
  checkStoryVisibility();

  var ctaCardCounters = [false, false, false];

  function animateCtaCounter($counter) {
    var target = parseFloat($counter.data("target"));
    var suffix = $counter.data("suffix") || "";
    var isDecimal = target % 1 !== 0;
    var duration = 1800;
    var startTime = performance.now();
    function animateCount(now) {
      var elapsed = now - startTime;
      var t = Math.min(elapsed / duration, 1);
      var easeT = 1 - Math.pow(1 - t, 3);
      var current = easeT * target;
      if (isDecimal) {
        $counter.text(current.toFixed(1) + suffix);
      } else {
        $counter.text(Math.round(current) + suffix);
      }
      if (t < 1) { requestAnimationFrame(animateCount); }
    }
    requestAnimationFrame(animateCount);
  }

  function updateCtaAbstractScroll() {
    if (!$ctaBlock.length) {
      return;
    }

    const rect = $ctaBlock[0].getBoundingClientRect();
    const start = window.innerHeight * 1.55;
    const end = -window.innerHeight * 0.65;
    const progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));
    const eased = progress * progress * (3 - 2 * progress);

    $ctaBlock.css("--cta-progress", eased.toFixed(3));

    // Reveal bento cards one by one based on scroll progress
    var $cards = $ctaBlock.find(".cta-block__bento-card");
    // Card 1 appears at progress 0.15, card 2 at 0.30, card 3 at 0.45
    var thresholds = [0.15, 0.30, 0.45];
    $cards.each(function(index) {
      if (progress >= thresholds[index] && !ctaCardCounters[index]) {
        ctaCardCounters[index] = true;
        var $card = $(this);
        $card.addClass("is-visible");
        animateCtaCounter($card.find(".cta-block__counter"));
      }
    });
  }

  function syncExpeditionScrollHeight() {
    if (!$expeditionSection.length) {
      return;
    }
    if (window.innerWidth <= 480) return; // mobile uses CSS value directly
    const total = Math.max(window.innerHeight * 2.2, 1450);
    $expeditionSection.css("--expedition-height", total.toFixed(0) + "px");
  }

  function updateExpeditionScroll() {
    if (!$expeditionSection.length || !$expeditionCards.length) {
      return;
    }

    const top = $expeditionSection.offset().top;
    const height = $expeditionSection.outerHeight();
    const range = Math.max(1, height - window.innerHeight);
    const progress = Math.max(0, Math.min(1, (window.scrollY - top) / range));
    const raw = progress * ($expeditionCards.length - 1);
    const active = Math.round(raw);
    const xStep = window.innerWidth < 740 ? 94 : (window.innerWidth < 1100 ? 118 : 148);

    $expeditionCards.each(function (idx) {
      const dist = idx - raw;
      const x = dist * xStep;
      const y = Math.abs(dist) * 18;
      const scale = 1 - Math.min(0.2, Math.abs(dist) * 0.095);
      const opacity = Math.max(0.12, 1 - Math.abs(dist) * 0.34);
      const z = 120 - Math.round(Math.abs(dist) * 10);

      $(this)
        .css({
          opacity: opacity.toFixed(3),
          transform: "translateX(calc(-50% + " + x.toFixed(1) + "px)) translateY(" + y.toFixed(1) + "px) scale(" + scale.toFixed(3) + ")",
          zIndex: z
        })
        .toggleClass("is-active", idx === active);
    });

    const $activeCard = $expeditionCards.eq(active);
    if ($activeCard.length) {
      const bg = $activeCard.attr("data-bg");
      if (bg && bg !== expeditionBgUrl) {
        const useLayerA = expeditionBgLayer === 0;
        const $incoming = useLayerA ? $expeditionBgB : $expeditionBgA;
        const $outgoing = useLayerA ? $expeditionBgA : $expeditionBgB;

        $incoming.css("background-image", 'url("' + bg + '")');
        $incoming.addClass("is-visible");
        $outgoing.removeClass("is-visible");

        expeditionBgLayer = useLayerA ? 1 : 0;
        expeditionBgUrl = bg;
      }

      if (active !== expeditionTextIndex) {
        if (expeditionTextTimer) {
          clearTimeout(expeditionTextTimer);
        }

        const nextKicker = $activeCard.attr("data-kicker") || "Our Expertise";
        const nextTitle = $activeCard.attr("data-title") || $activeCard.find(".expedition-card__meta h3").text() || "Featured Service";
        const nextCopy = $activeCard.attr("data-copy") || "Build intelligent solutions with cutting-edge technology, scalable architecture, and enterprise-grade delivery.";

        $expeditionLeft.addClass("is-changing");
        expeditionTextTimer = setTimeout(function () {
          $expeditionKicker.text(nextKicker);
          $expeditionTitle.text(nextTitle);
          $expeditionCopy.text(nextCopy);
          $expeditionLeft.removeClass("is-changing");
          expeditionTextTimer = null;
        }, 120);

        expeditionTextIndex = active;
      }
    }

    if ($expeditionMeter.length) {
      $expeditionMeter.css("width", (progress * 100).toFixed(2) + "%");
    }
  }

  // ── Expedition auto-advance ─────────────────────────────
  function isExpeditionInView() {
    if (!$expeditionSection.length) return false;
    var rect = $expeditionSection[0].getBoundingClientRect();
    return rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5;
  }

  function expeditionScrollToCard(index) {
    if (!$expeditionSection.length) return;
    var top = $expeditionSection.offset().top;
    var height = $expeditionSection.outerHeight();
    var range = Math.max(1, height - window.innerHeight);
    var cardCount = $expeditionCards.length;
    var progress = cardCount > 1 ? index / (cardCount - 1) : 0;
    var targetScroll = top + (progress * range);
    $("html, body").animate({ scrollTop: targetScroll }, 800, "swing");
  }

  function expeditionResetAutoTimer() {
    if (expeditionAutoTimer) { clearInterval(expeditionAutoTimer); expeditionAutoTimer = null; }
    if (expeditionCompleted) return;
    expeditionAutoTimer = setInterval(function () {
      if (expeditionCompleted || !isExpeditionInView()) return;
      expeditionAutoIndex++;
      if (expeditionAutoIndex >= $expeditionCards.length) {
        clearInterval(expeditionAutoTimer);
        expeditionAutoTimer = null;
        expeditionCompleted = true;
        expeditionAutoActive = false;
        $(window).off("scroll.expeditionAuto");
        // Jump to next section after last card
        setTimeout(function () {
          var nextSection = $expeditionSection.next();
          if (nextSection.length) {
            $("html, body").animate({ scrollTop: nextSection.offset().top }, 800, "swing");
          }
        }, 1200);
        return;
      }
      expeditionScrollToCard(expeditionAutoIndex);
    }, EXPEDITION_AUTO_DELAY);
  }

  function startExpeditionAutoPlay() {
    if (expeditionAutoActive || expeditionCompleted) return;
    expeditionAutoActive = true;
    expeditionAutoIndex = 0;
    expeditionResetAutoTimer();
  }

  function checkExpeditionVisibility() {
    if (expeditionCompleted || expeditionAutoActive) return;
    if (isExpeditionInView()) {
      startExpeditionAutoPlay();
    }
  }
  $(window).on("scroll.expeditionAuto", checkExpeditionVisibility);

  // Reset auto timer when user scrolls manually within expedition section
  $(window).on("scroll.expeditionManual", function () {
    if (!expeditionAutoActive || expeditionCompleted) return;
    if (!isExpeditionInView()) return;
    // Recalculate which card is active based on current scroll
    var top = $expeditionSection.offset().top;
    var height = $expeditionSection.outerHeight();
    var range = Math.max(1, height - window.innerHeight);
    var progress = Math.max(0, Math.min(1, (window.scrollY - top) / range));
    var active = Math.round(progress * ($expeditionCards.length - 1));
    if (active !== expeditionAutoIndex) {
      expeditionAutoIndex = active;
      expeditionResetAutoTimer();
    }
  });
  // ── /Expedition auto-advance ────────────────────────────

  function setupPraiseTitle() {
    if (!$praiseTitle.length) {
      return;
    }

    const el = $praiseTitle[0];
    if (el.dataset.praiseSplit === "true") {
      praiseWordNodes = [];
      $praiseTitle.find(".praise-word__ink").each(function () {
        praiseWordNodes.push(this);
      });
      return;
    }

    const text = (el.textContent || "").replace(/\s+/g, " ").trim();
    if (!text) {
      return;
    }

    const words = text.split(" ");
    el.textContent = "";
    praiseWordNodes = [];

    words.forEach(function (word, idx) {
      const outer = document.createElement("span");
      outer.className = "praise-word";

      const ink = document.createElement("span");
      ink.className = "praise-word__ink";
      ink.textContent = word;

      outer.appendChild(ink);
      el.appendChild(outer);
      praiseWordNodes.push(ink);

      if (idx < words.length - 1) {
        el.appendChild(document.createTextNode(" "));
      }
    });

    el.dataset.praiseSplit = "true";
  }

  function syncPraiseScrollHeight() {
    if (!$praiseSection.length) {
      return;
    }
    if (window.innerWidth <= 480) return;
    const total = Math.max(window.innerHeight * 2.6, 1800);
    $praiseSection.css("--praise-scroll-height", total.toFixed(0) + "px");
  }

  function updatePraiseScroll() {
    if (!$praiseSection.length) {
      return;
    }
    if (window.innerWidth <= 480) return;

    const top = $praiseSection.offset().top;
    const height = $praiseSection.outerHeight();
    const range = Math.max(1, height - window.innerHeight);
    const progress = Math.max(0, Math.min(1, (window.scrollY - top) / range));
    const eased = progress * progress * (3 - 2 * progress);
    const spread = window.innerWidth < 740 ? 0.52 : (window.innerWidth < 1024 ? 0.66 : 0.78);

    if ($praiseGlow.length) {
      const glowScale = 0.84 + eased * 0.28;
      const glowOpacity = 0.36 + Math.sin(eased * Math.PI) * 0.46;
      $praiseGlow.css({
        transform: "translate(-50%, -50%) scale(" + glowScale.toFixed(3) + ")",
        opacity: glowOpacity.toFixed(3)
      });
    }

    if (praiseWordNodes.length) {
      const lead = eased * (praiseWordNodes.length + 1.35);
      praiseWordNodes.forEach(function (node, idx) {
        const fill = Math.max(0, Math.min(1, lead - idx));
        const y = (1 - fill) * 26;
        const scale = 0.94 + fill * 0.06;
        node.style.setProperty("--fill", fill.toFixed(3));
        node.style.opacity = (0.42 + fill * 0.58).toFixed(3);
        node.style.transform = "translateY(" + y.toFixed(1) + "px) scale(" + scale.toFixed(3) + ")";
      });
    }

    $praiseCards.each(function (idx) {
      const $card = $(this);
      const startX = Number($card.attr("data-start-x")) || 0;
      const startY = Number($card.attr("data-start-y")) || 0;
      const endX = Number($card.attr("data-end-x")) || 0;
      const endY = Number($card.attr("data-end-y")) || 0;
      const rot = Number($card.attr("data-rot")) || 0;

      const stagger = idx * 0.08;
      const local = Math.max(0, Math.min(1, (eased - stagger) / 0.74));
      const wave = Math.sin((local + idx * 0.09) * Math.PI);
      const x = (lerp(startX, endX, local) + Math.sin(local * Math.PI * 2 + idx) * 10) * spread;
      const y = (lerp(startY, endY, local) + wave * 12) * (0.84 + spread * 0.12);
      const opacity = Math.max(0, Math.min(1, (local * 1.45) * (1 - (local - 0.8) * 1.4)));
      const scale = 0.92 + local * 0.08;
      const angle = rot * (0.2 + local * 0.8);

      $card.css({
        opacity: opacity.toFixed(3),
        transform: "translate(calc(-50% + " + x.toFixed(1) + "px), calc(-50% + " + y.toFixed(1) + "px)) rotate(" + angle.toFixed(2) + "deg) scale(" + scale.toFixed(3) + ")"
      });
    });

    if ($praiseCta.length) {
      const ctaProgress = Math.max(0, Math.min(1, (eased - 0.54) / 0.36));
      const ctaY = 36 - ctaProgress * 36;
      $praiseCta.css({
        opacity: ctaProgress.toFixed(3),
        transform: "translate(-50%, " + ctaY.toFixed(1) + "px)"
      });
    }
  }

  function syncMegaMenuTop() {
    const navHeight = $nav.outerHeight() || 76;
    document.documentElement.style.setProperty("--nav-height", navHeight + "px");
  }

  // ── Hero video autoplay + nav state ───────────────
  const $heroVideo = $(".hero__bg-video");
  const $heroEl = $("#hero");

  function updateNavState() {
    const heroBottom = $heroEl.length ? $heroEl.offset().top + $heroEl.outerHeight() - 20 : 0;
    // Keep scrolled style when mega menu is open
    var megaOpen = $pricingMega.hasClass("is-open");
    $nav.toggleClass("nav--scrolled", window.scrollY > heroBottom || megaOpen);
  }

  if ($heroVideo.length) {
    $heroVideo.prop("muted", true);
    $heroVideo[0].play().catch(function () { });
  }

  $(window).on("scroll.hero", function () {
    updateNavState();
    updateStoryScroll();
    updateCtaAbstractScroll();
    updateExpeditionScroll();
    updatePraiseScroll();
  });

  $(window).on("resize.hero", function () {
    syncStoryHeight();
    updateStoryScroll();
    syncIntroScrollHeight();
    updateIntroScroll();
    syncEditorialHeight();
    updateCtaAbstractScroll();
    syncExpeditionScrollHeight();
    updateExpeditionScroll();
    syncPraiseScrollHeight();
    updatePraiseScroll();
  });

  setupPraiseTitle();
  build();
  syncMegaMenuTop();
  bindEvents();
  syncStoryHeight();
  syncIntroScrollHeight();
  syncEditorialHeight();
  syncExpeditionScrollHeight();
  syncPraiseScrollHeight();
  updateNavState();
  updateStoryScroll();
  updateIntroScroll();
  updateCtaAbstractScroll();
  updateExpeditionScroll();
  updatePraiseScroll();
  updateIndicators(0);
  requestScrollUpdate();
});

window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
 
    // ─── Hero Carousel ──────────────────────────────────────
    (function() {
      const slides = document.querySelectorAll('.hc-hero__slide');
      const dots = document.querySelectorAll('.hc-hero__dot');
      let current = 0;
      let timer;
 
      function goTo(idx) {
        slides[current].classList.remove('is-active');
        dots[current].classList.remove('is-active');
        current = idx;
        slides[current].classList.add('is-active');
        dots[current].classList.add('is-active');
      }
 
      function next() {
        goTo((current + 1) % slides.length);
      }
 
      function startAuto() {
        timer = setInterval(next, 5000);
      }
 
      dots.forEach(function(dot) {
        dot.addEventListener('click', function() {
          clearInterval(timer);
          goTo(Number(dot.dataset.slide));
          startAuto();
        });
      });
 
      startAuto();
    })();
 
    // ─── Floating Particles ─────────────────────────────────
    (function() {
      var container = document.getElementById('hero-particles');
      if (!container) return;
      for (var i = 0; i < 20; i++) {
        var p = document.createElement('span');
        p.className = 'hc-hero__particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (6 + Math.random() * 8) + 's';
        p.style.animationDelay = (Math.random() * 6) + 's';
        p.style.width = p.style.height = (2 + Math.random() * 4) + 'px';
        container.appendChild(p);
      }
    })();
 
    // ─── Scroll Reveal (all directions) ─────────────────────
    (function() {
      var selectors = '[data-reveal],[data-reveal-left],[data-reveal-right],[data-reveal-scale]';
      var els = document.querySelectorAll(selectors);
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var delay = entry.target.dataset.revealDelay || 0;
            setTimeout(function() {
              entry.target.classList.add('is-visible');
            }, delay * 150);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
 
      els.forEach(function(el, i) {
        if (!el.dataset.revealDelay) el.dataset.revealDelay = i % 5;
        observer.observe(el);
      });
    })();
 
    // ─── Counter Animation ──────────────────────────────────
    (function() {
      var counters = document.querySelectorAll('.hc-counter[data-target]');
      var observed = false;
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting && !observed) {
            observed = true;
            counters.forEach(function(el) {
              var target = parseInt(el.dataset.target);
              var duration = 1800;
              var start = performance.now();
              function tick(now) {
                var elapsed = now - start;
                var progress = Math.min(elapsed / duration, 1);
                var ease = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.round(target * ease);
                if (progress < 1) requestAnimationFrame(tick);
              }
              requestAnimationFrame(tick);
            });
          }
        });
      }, { threshold: 0.5 });
      if (counters.length) observer.observe(counters[0].closest('.hc-stats-strip'));
    })();
 
    // ─── Card Mouse Glow Tracking ───────────────────────────
    (function() {
      var cards = document.querySelectorAll('.hc-card');
      cards.forEach(function(card) {
        card.addEventListener('mousemove', function(e) {
          var rect = card.getBoundingClientRect();
          card.style.setProperty('--mouse-x', ((e.clientX - rect.left) / rect.width * 100) + '%');
          card.style.setProperty('--mouse-y', ((e.clientY - rect.top) / rect.height * 100) + '%');
        });
      });
    })();
