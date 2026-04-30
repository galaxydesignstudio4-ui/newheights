/* ===== NEW HEIGHTS SCHOOL - SHARED DATA + UTILITIES v4 ===== */

const NHS = (function () {
  const STORAGE_KEY = 'nhs_v3';
  const CONTENT_SECTION = 'site';
  const CONTENT_KEY = 'state';
  const SUPABASE_URL = 'https://vueoqcwbzqdajfwfjzkg.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1ZW9xY3dienFkYWpmd2ZqemtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0NDY4MTUsImV4cCI6MjA5MzAyMjgxNX0.EfwpI0Kw9P3iSB588vxNkM1JD6moLRlolFHenB1-FQg';

  const DEFAULT = {
    schoolName: "New Heights",
    schoolTagline: "School",
    schoolMotto: "Higher and Higher Still",
    logoDataUrl: "",
    navLinks: [
      { label: "Home", href: "index.html" },
      { label: "About", href: "about.html" },
      { label: "Programs", href: "programs.html" },
      { label: "Gallery", href: "gallery.html" },
      { label: "Admissions", href: "admissions.html" },
      { label: "Contact", href: "contact.html" }
    ],
    socialLinks: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      whatsapp: "https://wa.me/233552517018"
    },
    footerAbout: "An ultra-modern school at the heart of the equator, New Dawhenya, Ghana. Quality, affordable education - Higher and Higher Still.",
    footerCopyright: "© 2025 New Heights School, New Dawhenya, Ghana. All rights reserved.",
    galaxyStudioUrl: "https://galaxystudio.com",
    contactAddress: "New Dawhenya, Off Methodist Junction, Ghana",
    contactPhone1: "+233 552 517 018",
    contactPhone2: "+233 204 345 516",
    contactEmail1: "newheights218@gmail.com",
    contactEmail2: "",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.534344299989!2d-0.05820068525390625!3d5.674699999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b8e65e837f1%3A0x96a63047ecfc88e7!2sNew%20Dawhenya%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1700000000000",
    officeHours: [
      { day: "Monday - Friday", hours: "7:00 AM - 5:00 PM" },
      { day: "Saturday", hours: "8:00 AM - 12:00 PM" },
      { day: "Sunday", hours: "Closed" },
      { day: "Public Holidays", hours: "Closed" }
    ],
    hero: {
      bgImage: "",
      bgColor: "#1B5E20",
      badge: "New Dawhenya, Ghana - Est. 2013",
      heading: "Quality & Affordable Education for Every Child",
      headingAccent: "Affordable",
      subtext: "Higher and Higher Still - nurturing tomorrow's leaders academically, physically, mentally and emotionally.",
      btn1Text: "Enroll Now",
      btn1Link: "admissions.html",
      btn2Text: "Discover More",
      btn2Link: "about.html"
    },
    trustStats: [
      { num: "12+", label: "Years of Excellence" },
      { num: "350+", label: "Students Enrolled" },
      { num: "29", label: "Dedicated Staff" },
      { num: "100%", label: "Committed to Quality" }
    ],
    whyCards: [
      { icon: "🎓", title: "Quality Education", text: "We deliver a rigorous hybrid curriculum combining the Montessori System with the Ghana Education Service standards for holistic development." },
      { icon: "💰", title: "Affordable Fees", text: "We believe every child deserves world-class education regardless of their family's economic background - quality without compromise." },
      { icon: "🌿", title: "Conducive Environment", text: "Our campus at the heart of the equator offers a serene, safe, and inspiring setting for effective learning and personal growth." },
      { icon: "👩‍🏫", title: "Qualified Teachers", text: "Every member of our teaching staff is professionally trained, experienced, and deeply passionate about child development." },
      { icon: "💻", title: "State-of-the-art IT", text: "Our ICT programme equips students with modern digital skills and technological literacy essential for the 21st century." },
      { icon: "🥁", title: "Extracurricular Activities", text: "Cadet Corps, Cultural Troops, School Choir and more - we build confident, well-rounded young people beyond the classroom." }
    ],
    programs: [
      { image: "", badge: "Nursery", title: "Nursery", text: "A nurturing, play-based foundation that builds early language, numeracy, and social-emotional skills in a warm, caring environment." },
      { image: "", badge: "Kindergarten", title: "Kindergarten", text: "Guided discovery learning that bridges play and structured academics, preparing children confidently for primary school." },
      { image: "", badge: "Primary 1-6", title: "Primary School", text: "A hybrid Montessori-GES curriculum covering English, Mathematics, Science, Ghanaian Language, Creative Arts and Physical Education." },
      { image: "", badge: "JHS 1-3", title: "Junior High School", text: "Comprehensive BECE preparation with strong ICT integration, leadership development, and life skills for confident young adults." }
    ],
    aboutPreview: {
      image: "",
      badge: "12+",
      badgeLabel: "Years of Experience",
      heading: "Education at the Heart of the Equator",
      para1: "New Heights School is an ultra-modern school situated at the heart of the equator in New Dawhenya, Ghana. We believe quality education should be made accessible to every child.",
      para2: "With more than 12 years of experience, we have refined our approach to effectively develop students academically, physically, mentally and emotionally - because class work is just one part of a child's education.",
      values: ["Holistic Student Development", "Hybrid Montessori-GES Curriculum", "Rich Extracurricular Culture"]
    },
    galleryImages: [],
    videoUrl: "",
    videoYoutubeId: "",
    videoThumb: "",
    videoHeading: "Experience New Heights School",
    videoSubtext: "See our campus, meet our students, and discover why families in New Dawhenya trust us with their children's future.",
    ctaBanner: {
      label: "Enrolment Open 2025/26",
      heading: "Give Your Child the Best Start",
      text: "Secure your child's place at New Heights School today. Limited spaces available.",
      btnText: "Apply Now",
      btnLink: "admissions.html"
    },
    about: {
      mission: "New Heights School is an ultra-modern school situated at the heart of the equator. We believe quality education should be made accessible to every child. With more than 12 years of experience in the education industry, we have refined our approach to effectively develop students academically, physically, mentally and emotionally. Class work is just a part of child education. We understand this and thus, have a lot of extracurricular activities in place.",
      vision: "To be the most sought-after school in Ghana - recognised for producing well-rounded, confident and academically excellent graduates who are fully prepared to lead at every level of society.",
      curriculum: "We operate a hybrid curriculum combining the globally-respected Montessori System with the Ghana Education Service (GES) standard curriculum. This blend ensures our students are internationally competitive while meeting all national academic benchmarks.",
      extracurricular: ["Cadet Corps", "Cultural Troops", "School Choir"],
      image: "",
      timeline: [
        { year: "2013", title: "School Founded", text: "New Heights School was established in New Dawhenya with a clear vision: quality, affordable education accessible to every child in the community." },
        { year: "2016", title: "Primary School Added", text: "Growing community demand led to the expansion of our academic programme to include Primary 1 through 6 with fully qualified teachers." },
        { year: "2019", title: "JHS Programme Launched", text: "Junior High School classes were introduced, completing the full academic pathway from Nursery to BECE examination." },
        { year: "2022", title: "ICT Centre Opened", text: "A state-of-the-art computer laboratory was opened, giving every student hands-on digital education from the earliest age." },
        { year: "2025", title: "Major Digital Upgrade", text: "Full campus and digital systems upgrade - cementing New Heights' reputation for modern, excellent education in Greater Accra." }
      ],
      team: [
        { image: "", name: "Mr. Joseph Cobbinah", role: "Director", bio: "Visionary founder and Director of New Heights School, with a deep passion for making quality education accessible to every child in Ghana." },
        { image: "", name: "Mrs. Doris Cobbinah", role: "Headmistress", bio: "Dedicated Headmistress who leads the day-to-day academic and administrative excellence that defines New Heights School." }
      ]
    },
    admissions: {
      steps: [
        { num: "1", title: "Complete Application", text: "Fill out the comprehensive application form with accurate details about your child, family, and previous schooling." },
        { num: "2", title: "Interview & Assessment", text: "Your child attends a friendly, age-appropriate assessment. Parents also meet the admissions team to discuss academic expectations." },
        { num: "3", title: "Receive Offer Letter", text: "Successful applicants receive an official acceptance letter by email and SMS notification within 5 working days." },
        { num: "4", title: "Confirm & Enroll", text: "Pay the enrolment fee, submit required documents, receive your welcome pack, and officially join the New Heights School family!" }
      ],
      fees: [
        { level: "Nursery 1", tuition: "GH₵ -", levies: "GH₵ -", feeding: "GH₵ -", enrolment: "GH₵ -" },
        { level: "Nursery 2", tuition: "GH₵ -", levies: "GH₵ -", feeding: "GH₵ -", enrolment: "GH₵ -" },
        { level: "Kindergarten 1", tuition: "GH₵ -", levies: "GH₵ -", feeding: "GH₵ -", enrolment: "GH₵ -" },
        { level: "Kindergarten 2", tuition: "GH₵ -", levies: "GH₵ -", feeding: "GH₵ -", enrolment: "GH₵ -" },
        { level: "Primary 1", tuition: "GH₵ -", levies: "GH₵ -", feeding: "GH₵ -", enrolment: "GH₵ -" },
        { level: "Primary 2", tuition: "GH₵ -", levies: "GH₵ -", feeding: "GH₵ -", enrolment: "GH₵ -" },
        { level: "Primary 3", tuition: "GH₵ -", levies: "GH₵ -", feeding: "GH₵ -", enrolment: "GH₵ -" },
        { level: "Primary 4", tuition: "GH₵ -", levies: "GH₵ -", feeding: "GH₵ -", enrolment: "GH₵ -" },
        { level: "Primary 5", tuition: "GH₵ -", levies: "GH₵ -", feeding: "GH₵ -", enrolment: "GH₵ -" },
        { level: "Primary 6", tuition: "GH₵ -", levies: "GH₵ -", feeding: "GH₵ -", enrolment: "GH₵ -" },
        { level: "JHS 1", tuition: "GH₵ -", levies: "GH₵ -", feeding: "GH₵ -", enrolment: "GH₵ -" },
        { level: "JHS 2", tuition: "GH₵ -", levies: "GH₵ -", feeding: "GH₵ -", enrolment: "GH₵ -" },
        { level: "JHS 3", tuition: "GH₵ -", levies: "GH₵ -", feeding: "GH₵ -", enrolment: "GH₵ -" }
      ],
      feesNote: "* Fees are reviewed each academic year. Contact the school directly for the current term's exact fee schedule. Sibling discounts and scholarship opportunities are available."
    },
    emailjsServiceId: "",
    emailjsTemplateId: "",
    emailjsPublicKey: "",
    adminEmail: "newheights218@gmail.com",
    applications: [],
    contactMessages: [],
    adminPassword: "NewHeights2025"
  };

  let cache = clone(DEFAULT);
  let supabaseClient = null;
  let initPromise = null;

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function mergeState(base, data) {
    const merged = Object.assign(clone(base), data || {});
    merged.socialLinks = Object.assign({}, base.socialLinks, data?.socialLinks || {});
    merged.hero = Object.assign({}, base.hero, data?.hero || {});
    merged.aboutPreview = Object.assign({}, base.aboutPreview, data?.aboutPreview || {});
    merged.ctaBanner = Object.assign({}, base.ctaBanner, data?.ctaBanner || {});
    merged.about = Object.assign({}, base.about, data?.about || {});
    merged.admissions = Object.assign({}, base.admissions, data?.admissions || {});
    return merged;
  }

  function readLocal() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? mergeState(DEFAULT, JSON.parse(raw)) : clone(DEFAULT);
    } catch (_err) {
      return clone(DEFAULT);
    }
  }

  function writeLocal(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch (err) {
      if (err?.name === 'QuotaExceededError') {
        alert('Browser storage is full. Remote save is still available, but some local caching may fail.');
      }
      return false;
    }
  }

  function loadSupabaseScript() {
    if (window.supabase?.createClient) return Promise.resolve();
    return new Promise((resolve, reject) => {
      const existing = document.querySelector('script[data-supabase-cdn="true"]');
      if (existing) {
        existing.addEventListener('load', resolve, { once: true });
        existing.addEventListener('error', reject, { once: true });
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
      script.async = true;
      script.dataset.supabaseCdn = 'true';
      script.onload = resolve;
      script.onerror = () => reject(new Error('Failed to load Supabase client.'));
      document.head.appendChild(script);
    });
  }

  async function getSupabase() {
    if (supabaseClient) return supabaseClient;
    await loadSupabaseScript();
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    return supabaseClient;
  }

  async function fetchStateFromRemote() {
    const supabase = await getSupabase();
    const { data, error } = await supabase
      .from('content')
      .select('id,value')
      .eq('section', CONTENT_SECTION)
      .eq('key', CONTENT_KEY)
      .maybeSingle();

    if (error) throw error;
    if (!data?.value) return null;

    try {
      return mergeState(DEFAULT, JSON.parse(data.value));
    } catch (_err) {
      return null;
    }
  }

  async function upsertStateRemote(data) {
    const supabase = await getSupabase();
    const payload = {
      section: CONTENT_SECTION,
      key: CONTENT_KEY,
      value: JSON.stringify(data),
      updated_at: new Date().toISOString()
    };
    const { data: existing, error: readError } = await supabase
      .from('content')
      .select('id')
      .eq('section', CONTENT_SECTION)
      .eq('key', CONTENT_KEY)
      .maybeSingle();

    if (readError) throw readError;
    if (existing?.id) {
      const { error } = await supabase.from('content').update(payload).eq('id', existing.id);
      if (error) throw error;
    } else {
      const { error } = await supabase.from('content').insert([payload]);
      if (error) throw error;
    }
  }

  async function fetchGalleryRemote() {
    const supabase = await getSupabase();
    const { data, error } = await supabase
      .from('gallery')
      .select('id,image_url,caption,uploaded_at')
      .order('uploaded_at', { ascending: false });
    if (error) throw error;
    return (data || []).map((row) => ({
      id: row.id,
      url: row.image_url,
      caption: row.caption || 'School Photo',
      uploaded_at: row.uploaded_at
    }));
  }

  async function uploadImage(file, bucket, folder) {
    const supabase = await getSupabase();
    const ext = file.name.includes('.') ? file.name.split('.').pop() : 'jpg';
    const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2, 10)}.${ext}`;
    const { error: uploadError } = await supabase.storage.from(bucket).upload(fileName, file, {
      cacheControl: '3600',
      upsert: true
    });
    if (uploadError) throw uploadError;
    const { data } = supabase.storage.from(bucket).getPublicUrl(fileName);
    if (!data?.publicUrl) throw new Error('Could not create a public URL for the uploaded file.');
    return data.publicUrl;
  }

  async function addGalleryImages(files, caption) {
    const supabase = await getSupabase();
    const uploaded = [];
    for (const file of files) {
      const publicUrl = await uploadImage(file, 'gallery', 'gallery');
      const row = {
        image_url: publicUrl,
        caption: caption || file.name.replace(/\.[^.]+$/, '') || 'School Photo'
      };
      const { data, error } = await supabase.from('gallery').insert([row]).select('id,image_url,caption,uploaded_at').single();
      if (error) throw error;
      uploaded.unshift({
        id: data.id,
        url: data.image_url,
        caption: data.caption || 'School Photo',
        uploaded_at: data.uploaded_at
      });
    }
    cache.galleryImages = [...uploaded, ...(cache.galleryImages || [])];
    writeLocal(cache);
    return cache.galleryImages;
  }

  async function removeGalleryImage(item) {
    if (!item?.id) return;
    const supabase = await getSupabase();
    const { error } = await supabase.from('gallery').delete().eq('id', item.id);
    if (error) throw error;
    cache.galleryImages = (cache.galleryImages || []).filter((img) => img.id !== item.id);
    writeLocal(cache);
  }

  function setFavicon(url) {
    if (!url) return;
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = url;
  }

  async function init(force) {
    if (!force && initPromise) return initPromise;
    initPromise = (async () => {
      const local = readLocal();
      cache = local;
      try {
        const remote = await fetchStateFromRemote();
        if (remote) cache = remote;
        cache.galleryImages = await fetchGalleryRemote();
      } catch (err) {
        console.warn('Using local fallback data because Supabase could not be reached.', err);
      }
      writeLocal(cache);
      if (cache.logoDataUrl) setFavicon(cache.logoDataUrl);
      return cache;
    })();
    return initPromise;
  }

  async function save(data) {
    cache = mergeState(DEFAULT, data);
    writeLocal(cache);
    try {
      await upsertStateRemote(cache);
      if (cache.logoDataUrl) setFavicon(cache.logoDataUrl);
      return true;
    } catch (err) {
      console.error(err);
      alert(`Supabase save failed: ${err.message || err}`);
      return false;
    }
  }

  async function refresh() {
    await init(true);
    return get();
  }

  async function addApplication(app) {
    const supabase = await getSupabase();
    const entry = Object.assign({}, app, {
      id: Date.now(),
      date: new Date().toLocaleString('en-GH'),
      status: 'pending',
      seen: false
    });

    const { error } = await supabase.from('admissions').insert([{
      name: entry.studentName,
      email: entry.email,
      phone: entry.phone,
      details: entry,
      submitted_at: new Date().toISOString()
    }]);
    if (error) throw error;

    cache.applications = cache.applications || [];
    cache.applications.unshift(entry);
    await save(cache);
    return entry;
  }

  async function addMessage(msg) {
    const supabase = await getSupabase();
    const entry = Object.assign({}, msg, {
      id: Date.now(),
      date: new Date().toLocaleString('en-GH'),
      seen: false
    });

    const { error } = await supabase.from('contacts').insert([{
      name: entry.name,
      email: entry.email || 'no-email@newheights.local',
      message: entry.message,
      submitted_at: new Date().toISOString()
    }]);
    if (error) throw error;

    cache.contactMessages = cache.contactMessages || [];
    cache.contactMessages.unshift(entry);
    await save(cache);
    return entry;
  }

  function get() {
    return mergeState(DEFAULT, cache);
  }

  function getUnseenCount() {
    const d = get();
    return (d.applications || []).filter((a) => !a.seen).length + (d.contactMessages || []).filter((m) => !m.seen).length;
  }

  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(new Error('Read failed'));
      reader.readAsDataURL(file);
    });
  }

  function youtubeId(url) {
    const match = url.match(/(?:youtu\.be\/|[?&]v=|\/embed\/)([A-Za-z0-9_-]{11})/);
    return match ? match[1] : null;
  }

  function youtubeThumb(id) {
    return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
  }

  function youtubeEmbed(id) {
    return `https://www.youtube.com/embed/${id}?rel=0`;
  }

  return {
    DEFAULT,
    addApplication,
    addGalleryImages,
    addMessage,
    fileToBase64,
    get,
    getSupabase,
    getUnseenCount,
    init,
    refresh,
    removeGalleryImage,
    save,
    setFavicon,
    uploadImage,
    youtubeEmbed,
    youtubeId,
    youtubeThumb
  };
})();

function renderNav(active) {
  const d = NHS.get();
  const logo = d.logoDataUrl
    ? `<img src="${d.logoDataUrl}" alt="Logo" class="nav-logo-img">`
    : `<span class="nav-logo-placeholder">🏫</span>`;

  document.getElementById('navPlaceholder').innerHTML = `
    <nav class="navbar" id="navbar">
      <div class="container">
        <div class="nav-inner">
          <a href="index.html" class="nav-logo">
            ${logo}
            <span class="nav-name">${d.schoolName} <em class="logo-accent">${d.schoolTagline}</em></span>
          </a>
          <ul class="nav-links" id="navLinks">
            ${d.navLinks.map((link) => `<li><a href="${link.href}" class="nav-link${link.href === active ? ' active' : ''}">${link.label}</a></li>`).join('')}
            <li><a href="admissions.html" class="btn btn-primary nav-cta-btn">Enroll Now</a></li>
          </ul>
          <button class="hamburger" id="hamburgerBtn" aria-label="Menu" onclick="toggleNav()">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>`;

  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.shiftKey && event.key === 'A') window.location.href = 'admin.html';
  });
}

function renderFooter() {
  const d = NHS.get();
  const sl = d.socialLinks;
  document.getElementById('footerPlaceholder').innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="index.html" class="nav-logo" style="margin-bottom:14px;display:inline-flex;align-items:center;gap:10px;">
              ${d.logoDataUrl ? `<img src="${d.logoDataUrl}" alt="Logo" style="height:38px;object-fit:contain;">` : '🏫'}
              <span>${d.schoolName} <em class="logo-accent" style="font-style:normal;">${d.schoolTagline}</em></span>
            </a>
            <p>${d.footerAbout}</p>
            <div class="footer-social">
              <a href="${sl.facebook}" target="_blank" rel="noopener" class="social-link" title="Facebook">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="${sl.twitter}" target="_blank" rel="noopener" class="social-link" title="Twitter / X">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="${sl.instagram}" target="_blank" rel="noopener" class="social-link" title="Instagram">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="${sl.whatsapp}" target="_blank" rel="noopener" class="social-link" title="WhatsApp">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul>${d.navLinks.map((link) => `<li><a href="${link.href}">→ ${link.label}</a></li>`).join('')}</ul>
          </div>
          <div class="footer-col">
            <h4>Programs</h4>
            <ul>
              <li><a href="programs.html">→ Nursery</a></li>
              <li><a href="programs.html">→ Kindergarten</a></li>
              <li><a href="programs.html">→ Primary School</a></li>
              <li><a href="programs.html">→ Junior High (JHS)</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact Us</h4>
            <ul>
              <li><a href="contact.html">📍 ${d.contactAddress}</a></li>
              <li><a href="tel:${d.contactPhone1}">📞 ${d.contactPhone1}</a></li>
              ${d.contactPhone2 ? `<li><a href="tel:${d.contactPhone2}">📞 ${d.contactPhone2}</a></li>` : ''}
              <li><a href="mailto:${d.contactEmail1}">✉ ${d.contactEmail1}</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>${d.footerCopyright}</p>
          <p>Designed &amp; Created by <a href="${d.galaxyStudioUrl}" target="_blank" rel="noopener">Galaxy Studio</a></p>
        </div>
      </div>
    </footer>`;
}

function toggleNav() {
  const navLinks = document.getElementById('navLinks');
  const button = document.getElementById('hamburgerBtn');
  if (!navLinks) return;
  const open = navLinks.classList.toggle('nav-open');
  if (button) button.classList.toggle('active', open);
  document.body.style.overflow = open ? 'hidden' : '';
}

document.addEventListener('click', (event) => {
  const navLinks = document.getElementById('navLinks');
  if (navLinks && navLinks.classList.contains('nav-open') && !event.target.closest('.navbar')) {
    navLinks.classList.remove('nav-open');
    const button = document.getElementById('hamburgerBtn');
    if (button) button.classList.remove('active');
    document.body.style.overflow = '';
  }
});

function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal, .reveal-left').forEach((el) => io.observe(el));
}
