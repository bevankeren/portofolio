export type CaseStudyLocale = "en" | "id";

export const retailWarZoneLinks = {
  github: "https://github.com/bevankeren/jakarta-retail-war-zones",
  kaggle:
    "https://www.kaggle.com/code/muhammadbevan/spatial-competition-between-alfamart-and-indomaret",
  map: "/maps/final_dark_competition_map.html",
  clusterMap: "/maps/retail_warzone_cluster_map.html",
  distanceDistribution: "/figures/nearest_competitor_distance_distribution.html",
  radar: "/figures/competition_radar_by_city.html",
  warzoneShare: "/figures/warzone_share_by_city_brand.html",
};

export const retailWarZonesContent = {
  en: {
    metaTitle: "Jakarta Retail War Zones",
    metaDescription:
      "Geospatial retail intelligence case study analyzing Alfamart and Indomaret spatial competition across DKI Jakarta.",
    backLabel: "Back to portfolio",
    eyebrow: "Featured Geospatial Data Science Case Study",
    title: "Jakarta Retail War Zones",
    subtitle: "Spatial Competition Analysis of Alfamart vs Indomaret",
    description:
      "A geospatial retail intelligence case study analyzing 967 convenience-store outlets across DKI Jakarta using OpenStreetMap, KDTree nearest-neighbor search, buffer overlap, and DBSCAN clustering.",
    primaryCta: "Open Interactive Map",
    githubCta: "View GitHub",
    kaggleCta: "View Kaggle Notebook",
    pendingLabel: "URL pending",
    kpis: [
      { value: "967", label: "Stores analyzed" },
      { value: "400", label: "Alfamart stores" },
      { value: "567", label: "Indomaret stores" },
      { value: "147.43 m", label: "Median Alfamart to Indomaret distance" },
      { value: "57.50%", label: "Alfamart stores within 200m of Indomaret" },
      { value: "51.78%", label: "Jakarta Pusat 500m overlap" },
    ],
    businessQuestionTitle: "Business Question",
    businessQuestion:
      "Are Alfamart and Indomaret truly competing through physical proximity, or do they only appear close because Jakarta is dense?",
    executiveReadTitle: "Executive Read",
    executiveRead:
      "The proximity signal is real. Alfamart is more competitor-proximate on median, while Indomaret combines direct urban competition with broader territorial coverage. Jakarta Pusat is the clearest war zone because density, overlap, and DBSCAN cluster share all peak there.",
    methodologyTitle: "Methodology",
    methodology: [
      "OSM Overpass API extraction",
      "Brand normalization",
      "DKI Jakarta boundary filtering",
      "EPSG:32748 metric projection",
      "KDTree nearest-neighbor analysis",
      "200m/500m buffer overlap",
      "DBSCAN retail war-zone clustering",
      "Interactive dark-mode visualization",
    ],
    findingsTitle: "Key Findings",
    findings: [
      {
        title: "Alfamart is more competitor-proximate.",
        detail:
          "Median Alfamart-to-Indomaret distance is 147.43m, lower than Alfamart's 324.30m same-brand median distance.",
      },
      {
        title: "Jakarta Pusat is the strongest retail war zone.",
        detail:
          "500m brand-overlap covers 51.78% of Jakarta Pusat, with 80.23% of Alfamart and 76.86% of Indomaret stores inside DBSCAN war zones.",
      },
      {
        title: "Indomaret shows broader territorial coverage.",
        detail:
          "Indomaret has more stores overall and a higher share of relatively isolated stores, especially in more dispersed administrative cities.",
      },
    ],
    galleryTitle: "Visual Gallery",
    gallery: [
      {
        src: "/assets/retail-war-zones/hero_map.png",
        title: "Final competition map",
        alt: "Dark map preview of Alfamart and Indomaret retail war zones in Jakarta",
      },
      {
        src: "/assets/retail-war-zones/distance_distribution.png",
        title: "Nearest competitor distance",
        alt: "Distance distribution chart comparing Alfamart and Indomaret",
      },
      {
        src: "/assets/retail-war-zones/radar_chart.png",
        title: "Competition radar",
        alt: "Competition radar chart by Jakarta administrative city",
      },
      {
        src: "/assets/retail-war-zones/warzone_share.png",
        title: "War-zone share",
        alt: "War-zone share chart by city and brand",
      },
    ],
    outputsTitle: "Interactive Outputs",
    outputs: [
      {
        title: "Final Dark Competition Map",
        description: "Brand locations, nearest-competitor distance, and war-zone status.",
        href: retailWarZoneLinks.map,
      },
      {
        title: "Retail War-Zone Cluster Map",
        description: "DBSCAN clusters and isolated-store labels.",
        href: retailWarZoneLinks.clusterMap,
      },
      {
        title: "Competition Radar by City",
        description: "Normalized comparison of density, proximity, overlap, and saturation.",
        href: retailWarZoneLinks.radar,
      },
      {
        title: "Nearest Competitor Distance Distribution",
        description: "Distance-bucket comparison between both brands.",
        href: retailWarZoneLinks.distanceDistribution,
      },
    ],
    openOutput: "Open output",
    stackTitle: "Technical Stack",
    stack: [
      "Python",
      "GeoPandas",
      "Shapely",
      "PyProj",
      "OpenStreetMap Overpass API",
      "SciPy cKDTree",
      "scikit-learn DBSCAN",
      "Plotly",
      "PyDeck",
      "Kaggle Notebook",
    ],
    limitationsTitle: "Limitations",
    limitations: [
      "OpenStreetMap completeness may vary by area.",
      "Store records represent available OSM data at extraction time.",
      "The analysis measures spatial proximity, not actual sales, footfall, or revenue.",
      "Market catchment radii are analytical proxies, not official trade areas.",
    ],
    futureTitle: "Future Work",
    future: [
      "Extend the analysis to Jabodetabek.",
      "Add population density, POI density, and traffic/accessibility indexes.",
      "Build a location suitability model.",
      "Deploy a Streamlit dashboard for filtering by brand, city, and radius.",
    ],
  },
  id: {
    metaTitle: "Jakarta Retail War Zones",
    metaDescription:
      "Studi kasus geospatial retail intelligence untuk menganalisis kompetisi lokasi Alfamart dan Indomaret di DKI Jakarta.",
    backLabel: "Kembali ke portofolio",
    eyebrow: "Studi Kasus Geospatial Data Science Unggulan",
    title: "Jakarta Retail War Zones",
    subtitle: "Analisis Kompetisi Spasial Alfamart vs Indomaret",
    description:
      "Studi kasus geospatial retail intelligence yang menganalisis 967 outlet minimarket di DKI Jakarta memakai OpenStreetMap, KDTree nearest-neighbor search, buffer overlap, dan DBSCAN clustering.",
    primaryCta: "Buka Peta Interaktif",
    githubCta: "Lihat GitHub",
    kaggleCta: "Lihat Kaggle Notebook",
    pendingLabel: "URL belum diisi",
    kpis: [
      { value: "967", label: "Store dianalisis" },
      { value: "400", label: "Store Alfamart" },
      { value: "567", label: "Store Indomaret" },
      { value: "147.43 m", label: "Median jarak Alfamart ke Indomaret" },
      { value: "57.50%", label: "Alfamart dalam 200m dari Indomaret" },
      { value: "51.78%", label: "Overlap 500m Jakarta Pusat" },
    ],
    businessQuestionTitle: "Pertanyaan Bisnis",
    businessQuestion:
      "Apakah Alfamart dan Indomaret benar-benar berkompetisi lewat kedekatan lokasi fisik, atau hanya terlihat dekat karena Jakarta memang padat?",
    executiveReadTitle: "Executive Read",
    executiveRead:
      "Sinyal proximity-nya kuat. Alfamart lebih dekat ke kompetitor secara median, sedangkan Indomaret menggabungkan kompetisi urban langsung dengan cakupan wilayah yang lebih luas. Jakarta Pusat menjadi war zone paling jelas karena density, overlap, dan share cluster DBSCAN semuanya paling tinggi.",
    methodologyTitle: "Metodologi",
    methodology: [
      "Ekstraksi OSM Overpass API",
      "Normalisasi brand",
      "Filtering batas administrasi DKI Jakarta",
      "Proyeksi metrik EPSG:32748",
      "Analisis nearest-neighbor KDTree",
      "Overlap buffer 200m/500m",
      "DBSCAN retail war-zone clustering",
      "Visualisasi interaktif dark-mode",
    ],
    findingsTitle: "Temuan Utama",
    findings: [
      {
        title: "Alfamart lebih competitor-proximate.",
        detail:
          "Median jarak Alfamart ke Indomaret adalah 147.43m, lebih rendah dibanding median jarak Alfamart ke sesama Alfamart sebesar 324.30m.",
      },
      {
        title: "Jakarta Pusat adalah retail war zone terkuat.",
        detail:
          "Overlap brand 500m mencakup 51.78% Jakarta Pusat, dengan 80.23% Alfamart dan 76.86% Indomaret masuk ke war zone DBSCAN.",
      },
      {
        title: "Indomaret punya cakupan wilayah lebih luas.",
        detail:
          "Indomaret memiliki total store lebih banyak dan share store relatif isolated lebih tinggi, terutama di kota administrasi yang lebih tersebar.",
      },
    ],
    galleryTitle: "Galeri Visual",
    gallery: [
      {
        src: "/assets/retail-war-zones/hero_map.png",
        title: "Peta kompetisi final",
        alt: "Preview peta gelap retail war zone Alfamart dan Indomaret di Jakarta",
      },
      {
        src: "/assets/retail-war-zones/distance_distribution.png",
        title: "Jarak kompetitor terdekat",
        alt: "Grafik distribusi jarak yang membandingkan Alfamart dan Indomaret",
      },
      {
        src: "/assets/retail-war-zones/radar_chart.png",
        title: "Radar kompetisi",
        alt: "Radar kompetisi per kota administrasi Jakarta",
      },
      {
        src: "/assets/retail-war-zones/warzone_share.png",
        title: "Share war zone",
        alt: "Grafik share war zone per kota dan brand",
      },
    ],
    outputsTitle: "Output Interaktif",
    outputs: [
      {
        title: "Final Dark Competition Map",
        description: "Lokasi brand, jarak kompetitor terdekat, dan status war zone.",
        href: retailWarZoneLinks.map,
      },
      {
        title: "Retail War-Zone Cluster Map",
        description: "Cluster DBSCAN dan label isolated store.",
        href: retailWarZoneLinks.clusterMap,
      },
      {
        title: "Competition Radar by City",
        description: "Perbandingan density, proximity, overlap, dan saturation yang dinormalisasi.",
        href: retailWarZoneLinks.radar,
      },
      {
        title: "Nearest Competitor Distance Distribution",
        description: "Perbandingan bucket jarak antara dua brand.",
        href: retailWarZoneLinks.distanceDistribution,
      },
    ],
    openOutput: "Buka output",
    stackTitle: "Technical Stack",
    stack: [
      "Python",
      "GeoPandas",
      "Shapely",
      "PyProj",
      "OpenStreetMap Overpass API",
      "SciPy cKDTree",
      "scikit-learn DBSCAN",
      "Plotly",
      "PyDeck",
      "Kaggle Notebook",
    ],
    limitationsTitle: "Limitasi",
    limitations: [
      "Kelengkapan OpenStreetMap bisa berbeda antar area.",
      "Record store merepresentasikan data OSM yang tersedia saat ekstraksi.",
      "Analisis ini mengukur proximity spasial, bukan sales, footfall, atau revenue aktual.",
      "Radius market catchment adalah proxy analitis, bukan trade area resmi.",
    ],
    futureTitle: "Future Work",
    future: [
      "Perluas analisis ke Jabodetabek.",
      "Tambahkan population density, POI density, dan indeks traffic/accessibility.",
      "Bangun location suitability model.",
      "Deploy dashboard Streamlit untuk filter brand, kota, dan radius.",
    ],
  },
} satisfies Record<
  CaseStudyLocale,
  {
    metaTitle: string;
    metaDescription: string;
    backLabel: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    primaryCta: string;
    githubCta: string;
    kaggleCta: string;
    pendingLabel: string;
    kpis: { value: string; label: string }[];
    businessQuestionTitle: string;
    businessQuestion: string;
    executiveReadTitle: string;
    executiveRead: string;
    methodologyTitle: string;
    methodology: string[];
    findingsTitle: string;
    findings: { title: string; detail: string }[];
    galleryTitle: string;
    gallery: { src: string; title: string; alt: string }[];
    outputsTitle: string;
    outputs: { title: string; description: string; href: string }[];
    openOutput: string;
    stackTitle: string;
    stack: string[];
    limitationsTitle: string;
    limitations: string[];
    futureTitle: string;
    future: string[];
  }
>;
