export interface Material {
  name: string;
  density: number;
  description: string;
  properties: string[];
}

export const materials: Record<string, Material> = {
  iron: {
    name: 'Demir',
    density: 7.86,
    description: 'Temel yapı malzemesi',
    properties: ['Yoğunluk: 7.86 g/cm³', 'Yüksek mukavemet', 'Manyetik özellik']
  },
  dkpSheet: {
    name: 'DKP Sac',
    density: 8.0,
    description: 'Soğuk haddelenmiş sac',
    properties: ['Yoğunluk: 8.0 g/cm³', 'İyi işlenebilirlik', 'Düzgün yüzey']
  },
  stainlessSteel: {
    name: 'Paslanmaz Çelik',
    density: 7.95,
    description: 'Korozyona dayanıklı çelik',
    properties: ['Yoğunluk: 7.95 g/cm³', 'Korozyon direnci', 'Hijyenik']
  },
  copper: {
    name: 'Bakır',
    density: 8.96,
    description: 'Yüksek iletkenliğe sahip metal',
    properties: ['Yoğunluk: 8.96 g/cm³', 'Yüksek iletkenlik', 'Korozyon direnci']
  },
  brass: {
    name: 'Pirinç',
    density: 8.55,
    description: 'Bakır ve çinko alaşımı',
    properties: ['Yoğunluk: 8.55 g/cm³', 'İyi işlenebilirlik', 'Dekoratif görünüm']
  },
  castSteel: {
    name: 'Döküm Çelik',
    density: 7.2,
    description: 'Döküm yöntemiyle üretilen çelik',
    properties: ['Yoğunluk: 7.2 g/cm³', 'Ekonomik', 'Karmaşık şekiller']
  },
  aluminum: {
    name: 'Alüminyum',
    density: 2.72,
    description: 'Hafif ve dayanıklı metal',
    properties: ['Yoğunluk: 2.72 g/cm³', 'Hafiflik', 'Korozyon direnci']
  },
  aluminum6061: {
    name: '6061 Alüminyum (AlMg1SiCu)',
    density: 2.72,
    description: 'Yapısal alüminyum alaşımı',
    properties: ['Yoğunluk: 2.72 g/cm³', 'İyi kaynaklanabilirlik', 'Orta mukavemet']
  },
  aluminum7005: {
    name: '7005 Alüminyum (AlZn4,5Mg1,5Mn)',
    density: 2.8,
    description: 'Yüksek mukavemetli alüminyum alaşımı',
    properties: ['Yoğunluk: 2.8 g/cm³', 'Yüksek mukavemet', 'İyi işlenebilirlik']
  },
  aluminum7020: {
    name: '7020 Alüminyum (AlZn4,5Mg1)',
    density: 2.8,
    description: 'Orta mukavemetli alüminyum alaşımı',
    properties: ['Yoğunluk: 2.8 g/cm³', 'İyi kaynak kabiliyeti', 'Orta mukavemet']
  },
  aluminum7075: {
    name: '7075 Alüminyum (AlZn5,5MgCu)',
    density: 2.8,
    description: 'Ultra yüksek mukavemetli alüminyum',
    properties: ['Yoğunluk: 2.8 g/cm³', 'En yüksek mukavemet', 'Havacılık kalitesi']
  },
  bronze: {
    name: 'Bronz',
    density: 8.8,
    description: 'Bakır bazlı alaşım',
    properties: ['Yoğunluk: 8.8 g/cm³', 'Aşınma direnci', 'Korozyon direnci']
  },
  tinPlate: {
    name: 'Teneke',
    density: 7.28,
    description: 'Kalay kaplı çelik',
    properties: ['Yoğunluk: 7.28 g/cm³', 'Korozyon direnci', 'Gıda uyumlu']
  },
  chrome: {
    name: 'Krom',
    density: 7.1,
    description: 'Sert ve parlak metal',
    properties: ['Yoğunluk: 7.1 g/cm³', 'Yüksek sertlik', 'Korozyon direnci']
  },
  gold: {
    name: 'Altın',
    density: 19.36,
    description: 'Değerli metal',
    properties: ['Yoğunluk: 19.36 g/cm³', 'Korozyona dayanıklı', 'Yüksek iletkenlik']
  },
  silver: {
    name: 'Gümüş',
    density: 10.5,
    description: 'Değerli metal',
    properties: ['Yoğunluk: 10.5 g/cm³', 'En iyi iletkenlik', 'Antibakteriyel']
  },
  mercury: {
    name: 'Cıva',
    density: 13.6,
    description: 'Sıvı metal',
    properties: ['Yoğunluk: 13.6 g/cm³', 'Oda sıcaklığında sıvı', 'Yüksek yoğunluk']
  },
  iridium: {
    name: 'İridyum',
    density: 22.6,
    description: 'En yoğun metal',
    properties: ['Yoğunluk: 22.6 g/cm³', 'Çok yüksek sertlik', 'Korozyon direnci']
  },
  platinum: {
    name: 'Platin',
    density: 21.45,
    description: 'Değerli metal',
    properties: ['Yoğunluk: 21.45 g/cm³', 'Kimyasal direnç', 'Yüksek ergime noktası']
  },
  tungsten: {
    name: 'Tungsten',
    density: 19.22,
    description: 'Yüksek ergime noktalı metal',
    properties: ['Yoğunluk: 19.22 g/cm³', 'En yüksek ergime noktası', 'Yüksek sertlik']
  },
  uranium: {
    name: 'Uranyum',
    density: 18.9,
    description: 'Radyoaktif metal',
    properties: ['Yoğunluk: 18.9 g/cm³', 'Radyoaktif', 'Yüksek yoğunluk']
  },
  lead: {
    name: 'Kurşun',
    density: 11.37,
    description: 'Yumuşak ve ağır metal',
    properties: ['Yoğunluk: 11.37 g/cm³', 'Radyasyon kalkanı', 'Düşük ergime noktası']
  },
  cobalt: {
    name: 'Kobalt',
    density: 8.75,
    description: 'Manyetik metal',
    properties: ['Yoğunluk: 8.75 g/cm³', 'Manyetik özellik', 'Yüksek sıcaklık direnci']
  },
  cadmium: {
    name: 'Kadmiyum',
    density: 8.64,
    description: 'Yumuşak metal',
    properties: ['Yoğunluk: 8.64 g/cm³', 'Korozyon direnci', 'Düşük ergime noktası']
  },
  nichrome: {
    name: 'Nikrom',
    density: 8.3,
    description: 'Nikel-krom alaşımı',
    properties: ['Yoğunluk: 8.3 g/cm³', 'Yüksek sıcaklık direnci', 'Elektrik direnci']
  },
  aluminumBronze: {
    name: 'Alüminyum Bronzu',
    density: 7.7,
    description: 'Alüminyum-bakır alaşımı',
    properties: ['Yoğunluk: 7.7 g/cm³', 'Korozyon direnci', 'Yüksek mukavemet']
  },
  manganese: {
    name: 'Manganez',
    density: 7.42,
    description: 'Sert ve kırılgan metal',
    properties: ['Yoğunluk: 7.42 g/cm³', 'Sertlik artırıcı', 'Oksitlenme direnci']
  },
  tin: {
    name: 'Kalay',
    density: 7.3,
    description: 'Yumuşak metal',
    properties: ['Yoğunluk: 7.3 g/cm³', 'Korozyon direnci', 'Düşük ergime noktası']
  },
  zinc: {
    name: 'Çinko',
    density: 7.1,
    description: 'Korozyona dayanıklı metal',
    properties: ['Yoğunluk: 7.1 g/cm³', 'Galvaniz kaplama', 'Korozyon direnci']
  },
  antimony: {
    name: 'Antimon',
    density: 6.69,
    description: 'Yarı metal',
    properties: ['Yoğunluk: 6.69 g/cm³', 'Sertlik artırıcı', 'Yarı iletken']
  },
  gallium: {
    name: 'Galyum',
    density: 5.91,
    description: 'Düşük ergime noktalı metal',
    properties: ['Yoğunluk: 5.91 g/cm³', 'Düşük ergime noktası', 'Yarı iletken']
  },
  titanium: {
    name: 'Titanyum',
    density: 4.6,
    description: 'Hafif ve güçlü metal',
    properties: ['Yoğunluk: 4.6 g/cm³', 'Yüksek mukavemet', 'Biyouyumluluk']
  },
  barium: {
    name: 'Baryum',
    density: 3.6,
    description: 'Reaktif metal',
    properties: ['Yoğunluk: 3.6 g/cm³', 'Yüksek reaktivite', 'X-ışını kalkanı']
  },
  scandium: {
    name: 'Skandüyum',
    density: 2.8,
    description: 'Nadir toprak elementi',
    properties: ['Yoğunluk: 2.8 g/cm³', 'Hafif metal', 'Yüksek ergime noktası']
  },
  duralumin: {
    name: 'Duralümin',
    density: 2.8,
    description: 'Alüminyum alaşımı',
    properties: ['Yoğunluk: 2.8 g/cm³', 'Yüksek mukavemet', 'İyi işlenebilirlik']
  },
  aluminumFoil: {
    name: 'Alüminyum folyo',
    density: 2.73,
    description: 'İnce alüminyum levha',
    properties: ['Yoğunluk: 2.73 g/cm³', 'Esnek', 'İyi ısı iletimi']
  },
  teflon: {
    name: 'Teflon',
    density: 2.25,
    description: 'Polimer malzeme',
    properties: ['Yoğunluk: 2.25 g/cm³', 'Yapışmaz yüzey', 'Kimyasal direnç']
  },
  concrete: {
    name: 'Beton',
    density: 2.1,
    description: 'Yapı malzemesi',
    properties: ['Yoğunluk: 2.1 g/cm³', 'Yüksek basınç dayanımı', 'Ekonomik']
  },
  graphite: {
    name: 'Grafit',
    density: 2.1,
    description: 'Karbon allotropu',
    properties: ['Yoğunluk: 2.1 g/cm³', 'Elektrik iletkenliği', 'Yağlayıcı özellik']
  },
  paronite: {
    name: 'Paronit',
    density: 1.8,
    description: 'Conta malzemesi',
    properties: ['Yoğunluk: 1.8 g/cm³', 'Sızdırmazlık', 'Isı direnci']
  },
  magnesium: {
    name: 'Magnezyum',
    density: 1.74,
    description: 'En hafif yapısal metal',
    properties: ['Yoğunluk: 1.74 g/cm³', 'Ultra hafif', 'Yüksek mukavemet']
  },
  nickel: {
    name: 'Nikel',
    density: 1.74,
    description: 'Sert ve dayanıklı metal',
    properties: ['Yoğunluk: 1.74 g/cm³', 'Korozyon direnci', 'Manyetik özellik']
  },
  carbon: {
    name: 'Karbon',
    density: 1.7,
    description: 'Temel element',
    properties: ['Yoğunluk: 1.7 g/cm³', 'Çok yönlü', 'Yüksek ergime noktası']
  },
  calcium: {
    name: 'Kalsiyum',
    density: 1.54,
    description: 'Reaktif metal',
    properties: ['Yoğunluk: 1.54 g/cm³', 'Yüksek reaktivite', 'Yumuşak metal']
  },
  delrin: {
    name: 'Delrin',
    density: 1.42,
    description: 'Mühendislik plastiği',
    properties: ['Yoğunluk: 1.42 g/cm³', 'Yüksek sertlik', 'İyi işlenebilirlik']
  },
  pom: {
    name: 'Polioksimetilen',
    density: 1.41,
    description: 'Mühendislik termoplastiği',
    properties: ['Yoğunluk: 1.41 g/cm³', 'Yüksek sertlik', 'Boyutsal kararlılık']
  },
  fiber: {
    name: 'Fiber',
    density: 1.4,
    description: 'Kompozit malzeme',
    properties: ['Yoğunluk: 1.4 g/cm³', 'Yüksek mukavemet', 'Hafiflik']
  },
  polyacetal: {
    name: 'Poliasetal - pom',
    density: 1.35,
    description: 'Mühendislik plastiği',
    properties: ['Yoğunluk: 1.35 g/cm³', 'Aşınma direnci', 'Düşük sürtünme']
  },
  textolite: {
    name: 'Tekstolit',
    density: 1.35,
    description: 'Kompozit malzeme',
    properties: ['Yoğunluk: 1.35 g/cm³', 'Elektrik yalıtımı', 'Mekanik dayanım']
  },
  kestamid: {
    name: 'Kestamid',
    density: 1.2,
    description: 'Mühendislik plastiği',
    properties: ['Yoğunluk: 1.2 g/cm³', 'Aşınma direnci', 'Darbe dayanımı']
  },
  polyamide: {
    name: 'Poliyamid',
    density: 1.2,
    description: 'Sentetik polimer',
    properties: ['Yoğunluk: 1.2 g/cm³', 'Yüksek dayanım', 'İyi işlenebilirlik']
  },
  polyethylene: {
    name: 'Polietilen',
    density: 1.2,
    description: 'Termoplastik polimer',
    properties: ['Yoğunluk: 1.2 g/cm³', 'Kimyasal direnç', 'Esneklik']
  },
  polyemit: {
    name: 'Poliemit',
    density: 1.2,
    description: 'Mühendislik plastiği',
    properties: ['Yoğunluk: 1.2 g/cm³', 'Yüksek sıcaklık direnci', 'Kimyasal direnç']
  },
  caprolone: {
    name: 'Kaprolon (PA 6)',
    density: 1.15,
    description: 'Naylon türevi',
    properties: ['Yoğunluk: 1.15 g/cm³', 'Aşınma direnci', 'Darbe dayanımı']
  },
  alpolen: {
    name: 'Alpolen',
    density: 0.96,
    description: 'Polietilen türevi',
    properties: ['Yoğunluk: 0.96 g/cm³', 'Hafiflik', 'Kimyasal direnç']
  }
};