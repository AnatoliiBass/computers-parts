const ADD_CATEGORY = 'ADD_CATEGORY'
const UPDATE_CATEGORY = 'UPDATE-CATEGORY'

const initState = {
   categories: {
      newinfo: "",
      categories: [
         {
            "name": "Components",
            "id": "1011",
            "items": [
               {
                  "name": "Sound cards",
                  "id": "1018",
                  "parent_id": "1011"
               },
               {
                  "name": "Video cards",
                  "id": "1019",
                  "parent_id": "1011"
               },
            ]
         },
         {
            "name": "Network hardware",
            "id": "1027",
            "items": [
               {
                  "name": "Modems",
                  "id": "1029",
                  "parent_id": "1027"
               },
               {
                  "name": "Routers",
                  "id": "1030",
                  "parent_id": "1027"
               },
            ]
         }
      ]
   },
   brands: ["Creative", "NAD", "Cambridge", "Korg",
      "RME", "C-Media", "Asus", "Huawei", "ZTE"],
   products: [
      {
         "sku": "346859",
         "name": "Звуковая карта Creative Sound Blaster Recon3D PCIe",
         "category_id": "1018",
         "quantity": 4,
         "description": "Модель предназначена для максимально качественной передача звукового сопровождения в компьютерных играх. Сконструирована на основе популярного аудиочипа Sound Core3D. Обеспечивает возможность воспроизведения объёмного 5.1-канального звука с 24-битным разрешением, максимальная частота дискретизации составляет 96 кГц, а соотношение сигнал/шум находится на уровне 102 дБ. Отдельного внимания заслуживает встроенный усилитель для наушников с сопротивлением до 600 Ом. Среди прочего отметим поддержку технологии EAX 5.0 HD.",
         "short_description": "",
         "manufacturer": "Creative",
         "weight": "0",
         "height": "0",
         "width": "0",
         "depth": "0",
         "meta_title": "",
         "meta_keywords": "",
         "meta_description": "",
         "product_url": "http://magazilla.ru/desc/creative-sound-blaster-recon3d-pcie/",
         "reviews_number": "",
         "rating": "",
         "price": "2750",
         "price_old": "0",
         "price_wholesale": "0",
         "features": [
            {
               "name": "Вид",
               "value": "геймерская"
            },
            {
               "name": "Тип",
               "value": "внутренняя"
            },
            {
               "name": "Интерфейс подключения",
               "value": "PCIe"
            },
            {
               "name": "Количество каналов",
               "value": "5.1"
            },
            {
               "name": "Аудиочип",
               "value": "Sound Core3D"
            },
            {
               "name": "Поддержка стандартов",
               "value": "EAX 5.0 HD"
            },
            {
               "name": "Поддержка ASIO",
               "value": "да"
            },
            {
               "name": "Разрядность",
               "value": "24 бит"
            },
            {
               "name": "Макс. частота дискретизации",
               "value": "96 кГц"
            },
            {
               "name": "Соотношение сигнал/шум",
               "value": "102 дБ"
            },
            {
               "name": "Дополнительно",
               "value": "Усилитель для наушников / до 600 Ом /"
            },
            {
               "name": "mini-Jack (3.5 мм)",
               "value": "1 / линейный/микрофон /"
            },
            {
               "name": "Оптический S/P-DIF",
               "value": "1"
            }
         ],
         "images": [
            {
               "name": "346859_1854796228.jpg",
               "url": "http://magazilla.ru/jpg_zoom1/346859.jpg"
            }
         ]
      },
      {
         "sku": "698676",
         "name": "Звуковая карта NAD DAC 2",
         "category_id": "1018",
         "quantity": 12,
         "description": "Соотношение сигнал/шум (дБ): 80; Макс. частота дискретизации (кГц): 96; Разрядность (бит): 24; Дополнительное питание; Количество каналов: 2; Интерфейс подключения: USB; Тип: внешняя",
         "short_description": "",
         "manufacturer": "NAD",
         "weight": "0",
         "height": "0",
         "width": "0",
         "depth": "0",
         "meta_title": "",
         "meta_keywords": "",
         "meta_description": "",
         "product_url": "http://magazilla.ru/desc/nad-dac-2/",
         "reviews_number": "",
         "rating": "",
         "price": "22000",
         "price_old": "0",
         "price_wholesale": "0",
         "features": [
            {
               "name": "Тип",
               "value": "внешняя"
            },
            {
               "name": "Интерфейс подключения",
               "value": "USB"
            },
            {
               "name": "Количество каналов",
               "value": "2"
            },
            {
               "name": "Дополнительное питание",
               "value": "да"
            },
            {
               "name": "Разрядность",
               "value": "24 бит"
            },
            {
               "name": "Макс. частота дискретизации",
               "value": "96 кГц"
            },
            {
               "name": "Соотношение сигнал/шум",
               "value": "80 дБ"
            },
            {
               "name": "RCA",
               "value": "2"
            },
            {
               "name": "Коаксиальный S/P-DIF",
               "value": "1"
            }
         ],
         "images": [
            {
               "name": "698676_220289503.jpg",
               "url": "http://magazilla.ru/jpg_zoom1/698676.jpg"
            },
            {
               "name": "eydby99y7u1_596506807.jpg",
               "url": "http://mzimg.com/big/u1/eydby99y7u1.jpg"
            },
            {
               "name": "f7j3o2cq971_-1878640439.jpg",
               "url": "http://mzimg.com/big/71/f7j3o2cq971.jpg"
            },
            {
               "name": "fjranl11w71_1712419114.jpg",
               "url": "http://mzimg.com/big/71/fjranl11w71.jpg"
            }
         ]
      },
      {
         "sku": "353732",
         "name": "Звуковая карта Cambridge DacMagic XS",
         "category_id": "1018",
         "quantity": 7,
         "description": "Соотношение сигнал/шум (дБ): 103; Макс. частота дискретизации (кГц): 192; Разрядность (бит): 24; Поддержка Mac; Количество каналов: 2; Интерфейс подключения: USB; Тип: внешняя; Вид: ЦАП",
         "short_description": "",
         "manufacturer": "Cambridge",
         "weight": "0",
         "height": "0",
         "width": "0",
         "depth": "0",
         "meta_title": "",
         "meta_keywords": "",
         "meta_description": "",
         "product_url": "http://magazilla.ru/desc/cambridge-dacmagic-xs/",
         "reviews_number": "",
         "rating": "",
         "price": "9889",
         "price_old": "0",
         "price_wholesale": "0",
         "features": [
            {
               "name": "Вид",
               "value": "ЦАП"
            },
            {
               "name": "Тип",
               "value": "внешняя"
            },
            {
               "name": "Интерфейс подключения",
               "value": "USB"
            },
            {
               "name": "Количество каналов",
               "value": "2"
            },
            {
               "name": "Аудиочип",
               "value": "ESS9023"
            },
            {
               "name": "Поддержка Mac",
               "value": "да"
            },
            {
               "name": "Разрядность",
               "value": "24 бит"
            },
            {
               "name": "Макс. частота дискретизации",
               "value": "192 кГц"
            },
            {
               "name": "Соотношение сигнал/шум",
               "value": "103 дБ"
            },
            {
               "name": "Дополнительно",
               "value": "Усилитель для наушников"
            },
            {
               "name": "mini-Jack (3.5 мм)",
               "value": "1"
            }
         ],
         "images": [
            {
               "name": "353732_448727067.jpg",
               "url": "http://magazilla.ru/jpg_zoom1/353732.jpg"
            },
            {
               "name": "ed348wtgj01_-121342801.jpg",
               "url": "http://mzimg.com/big/01/ed348wtgj01.jpg"
            }
         ]
      },
      {
         "sku": "442212",
         "name": "Звуковая карта Korg DS-DAC-100M",
         "category_id": "1018",
         "quantity": 5,
         "description": "Соотношение сигнал/шум (дБ): 105; Макс. частота дискретизации (кГц): 192; Разрядность (бит): 24; Поддержка Mac; Количество каналов: 2; Интерфейс подключения: USB; Тип: внешняя; Вид: ЦАП",
         "short_description": "",
         "manufacturer": "Korg",
         "weight": "0",
         "height": "0",
         "width": "0",
         "depth": "0",
         "meta_title": "",
         "meta_keywords": "",
         "meta_description": "",
         "product_url": "http://magazilla.ru/desc/korg-ds-dac-100m/",
         "reviews_number": "",
         "rating": "",
         "price": "22660",
         "price_old": "0",
         "price_wholesale": "0",
         "features": [
            {
               "name": "Вид",
               "value": "ЦАП"
            },
            {
               "name": "Тип",
               "value": "внешняя"
            },
            {
               "name": "Интерфейс подключения",
               "value": "USB"
            },
            {
               "name": "Количество каналов",
               "value": "2"
            },
            {
               "name": "Аудиочип",
               "value": "Cirrus Logic CS4398"
            },
            {
               "name": "Поддержка стандартов",
               "value": "Core Audio, WDM, DSD"
            },
            {
               "name": "Поддержка ASIO",
               "value": "да"
            },
            {
               "name": "Поддержка Mac",
               "value": "да"
            },
            {
               "name": "Разрядность",
               "value": "24 бит"
            },
            {
               "name": "Макс. частота дискретизации",
               "value": "192 кГц"
            },
            {
               "name": "Динамический диапазон",
               "value": "105 дБ"
            },
            {
               "name": "Соотношение сигнал/шум",
               "value": "105 дБ"
            },
            {
               "name": "mini-Jack (3.5 мм)",
               "value": "1"
            }
         ],
         "images": [
            {
               "name": "442212_-1443221947.jpg",
               "url": "http://magazilla.ru/jpg_zoom1/442212.jpg"
            },
            {
               "name": "ejd9wbvwy51_-1686078602.jpg",
               "url": "http://mzimg.com/big/51/ejd9wbvwy51.jpg"
            },
            {
               "name": "ejd9wib7211_-1700815325.jpg",
               "url": "http://mzimg.com/big/11/ejd9wib7211.jpg"
            },
            {
               "name": "ejd9woiv9l1_1000582377.jpg",
               "url": "http://mzimg.com/big/l1/ejd9woiv9l1.jpg"
            },
            {
               "name": "ejd9wv1myj1_-1654536569.jpg",
               "url": "http://mzimg.com/big/j1/ejd9wv1myj1.jpg"
            }
         ]
      },
      {
         "sku": "990225",
         "name": "Звуковая карта RME HDSP 9652",
         "category_id": "1018",
         "quantity": 5,
         "description": "Макс. частота дискретизации (кГц): 96; Разрядность (бит): 24; Поддержка Mac; Количество каналов: 2; Интерфейс подключения: PCI; Тип: внутренняя; Вид: аудиоинтерфейс",
         "short_description": "",
         "manufacturer": "RME",
         "weight": "0",
         "height": "0",
         "width": "0",
         "depth": "0",
         "meta_title": "",
         "meta_keywords": "",
         "meta_description": "",
         "product_url": "http://magazilla.ru/desc/rme-hdsp-9652/",
         "reviews_number": "",
         "rating": "",
         "price": "45710.5",
         "price_old": "0",
         "price_wholesale": "0",
         "features": [
            {
               "name": "Вид",
               "value": "аудиоинтерфейс"
            },
            {
               "name": "Тип",
               "value": "внутренняя"
            },
            {
               "name": "Интерфейс подключения",
               "value": "PCI"
            },
            {
               "name": "Количество каналов",
               "value": "2"
            },
            {
               "name": "Поддержка стандартов",
               "value": "MME, GSIF"
            },
            {
               "name": "Поддержка ASIO",
               "value": "да"
            },
            {
               "name": "Поддержка Mac",
               "value": "да"
            },
            {
               "name": "Разрядность",
               "value": "24 бит"
            },
            {
               "name": "Макс. частота дискретизации",
               "value": "96 кГц"
            },
            {
               "name": "Оптический S/P-DIF",
               "value": "3 / TosLink /"
            },
            {
               "name": "Коаксиальный S/P-DIF",
               "value": "1"
            },
            {
               "name": "MIDI",
               "value": "1"
            }
         ],
         "images": [
            {
               "name": "990225_131451333.jpg",
               "url": "http://magazilla.ru/jpg_zoom1/990225.jpg"
            },
            {
               "name": "fa7uthrdpl1_1866071591.jpg",
               "url": "http://mzimg.com/big/l1/fa7uthrdpl1.jpg"
            }
         ]
      },
      {
         "sku": "647731",
         "name": "Звуковая карта C-Media CMI8738-LX",
         "category_id": "1018",
         "quantity": 5,
         "description": "Макс. частота дискретизации (кГц): 48; Разрядность (бит): 16; Количество каналов: 5.1; Интерфейс подключения: PCI; Тип: внутренняя; Вид: обычная ",
         "short_description": "",
         "manufacturer": "C-Media",
         "weight": "0",
         "height": "0",
         "width": "0",
         "depth": "0",
         "meta_title": "",
         "meta_keywords": "",
         "meta_description": "",
         "product_url": "http://magazilla.ru/desc/c-media-cmi8738-lx/",
         "reviews_number": "",
         "rating": "",
         "price": "781",
         "price_old": "0",
         "price_wholesale": "0",
         "features": [
            {
               "name": "Вид",
               "value": "обычная"
            },
            {
               "name": "Тип",
               "value": "внутренняя"
            },
            {
               "name": "Интерфейс подключения",
               "value": "PCI / 2.1 /"
            },
            {
               "name": "Количество каналов",
               "value": "5.1"
            },
            {
               "name": "Аудиочип",
               "value": "CMI8738"
            },
            {
               "name": "Разрядность",
               "value": "16 бит"
            },
            {
               "name": "Макс. частота дискретизации",
               "value": "48 кГц"
            },
            {
               "name": "Дополнительно",
               "value": "Усилитель для наушников"
            },
            {
               "name": "mini-Jack (3.5 мм)",
               "value": "4"
            }
         ],
         "images": [
            {
               "name": "647731_-1574929946.jpg",
               "url": "http://magazilla.ru/jpg_zoom1/647731.jpg"
            }
         ]
      },
      {
         "sku": "345979",
         "name": "Звуковая карта Asus Xonar D1",
         "category_id": "1018",
         "quantity": 5,
         "description": "Принадлежит к семейству игровых звуковых карт Xonar производства бренда Asus. Способна обеспечить реализацию 7.1-канальной аудиосистемы, может похвастаться поддержкой полного спектра технологий Dolby Home Theater. В основе устройства находится аудиочип AV100, позволяющий обрабатывать данные с частотой дискретизации до 192 кГц и максимальной глубиной в 24 бита. Соотношение сигнал/шум на уровне 116 дБ. Обратим внимание, что для подключения используется интерфейс PCI. В свою очередь, для интерфейса PCIе предусмотрена аналогичная модель XONAR DX. ",
         "short_description": "",
         "manufacturer": "Asus",
         "weight": "0",
         "height": "0",
         "width": "0",
         "depth": "0",
         "meta_title": "",
         "meta_keywords": "",
         "meta_description": "",
         "product_url": "http://magazilla.ru/desc/asus-xonar-d1/",
         "reviews_number": "",
         "rating": "",
         "price": "5175.5",
         "price_old": "0",
         "price_wholesale": "0",
         "features": [
            {
               "name": "Вид",
               "value": "геймерская"
            },
            {
               "name": "Тип",
               "value": "внутренняя"
            },
            {
               "name": "Интерфейс подключения",
               "value": "PCI"
            },
            {
               "name": "Количество каналов",
               "value": "7.1"
            },
            {
               "name": "Аудиочип",
               "value": "ASUS AV100"
            },
            {
               "name": "Поддержка стандартов",
               "value": "Dolby Digital Live, Dolby Headphone, Dolby Virtual Speaker / Dolby Pro Logic /"
            },
            {
               "name": "Поддержка ASIO",
               "value": "да"
            },
            {
               "name": "Разрядность",
               "value": "24 бит"
            },
            {
               "name": "Макс. частота дискретизации",
               "value": "192 кГц"
            },
            {
               "name": "Соотношение сигнал/шум",
               "value": "116 дБ"
            },
            {
               "name": "mini-Jack (3.5 мм)",
               "value": "1 / линейный/микрофон /"
            },
            {
               "name": "Оптический S/P-DIF",
               "value": "1"
            }
         ],
         "images": [
            {
               "name": "345979_-2135349303.jpg",
               "url": "http://magazilla.ru/jpg_zoom1/345979.jpg"
            },
            {
               "name": "ebydyrx91g1_-1276252018.jpg",
               "url": "http://mzimg.com/big/g1/ebydyrx91g1.jpg"
            }
         ]
      },
      {
         "sku": "990198",
         "name": "Звуковая карта RME HDSP 9632",
         "category_id": "1018",
         "quantity": 13,
         "description": "Соотношение сигнал/шум (дБ): 110; Макс. частота дискретизации (кГц): 192; Разрядность (бит): 24; Поддержка Mac; Количество каналов: 2; Интерфейс подключения: PCI; Тип: внутренняя; Вид: аудиоинтерфейс <div rel=\"v:rating\"><span typeof=\"v:Rating\">Рейтинг модели: <span property='v:value'>5</span> из <span property=\"v:best\">5</span> (<span property=\"v:count\">2</span> оценки)</span></div>",
         "short_description": "",
         "manufacturer": "RME",
         "weight": "0",
         "height": "0",
         "width": "0",
         "depth": "0",
         "meta_title": "",
         "meta_keywords": "",
         "meta_description": "",
         "product_url": "http://magazilla.ru/desc/rme-hdsp-9632/",
         "reviews_number": "",
         "rating": "",
         "price": "30343.5",
         "price_old": "0",
         "price_wholesale": "0",
         "features": [
            {
               "name": "Вид",
               "value": "аудиоинтерфейс"
            },
            {
               "name": "Тип",
               "value": "внутренняя"
            },
            {
               "name": "Интерфейс подключения",
               "value": "PCI"
            },
            {
               "name": "Количество каналов",
               "value": "2"
            },
            {
               "name": "Поддержка ASIO",
               "value": "да"
            },
            {
               "name": "Поддержка Mac",
               "value": "да"
            },
            {
               "name": "Разрядность",
               "value": "24 бит"
            },
            {
               "name": "Макс. частота дискретизации",
               "value": "192 кГц"
            },
            {
               "name": "Соотношение сигнал/шум",
               "value": "110 дБ"
            },
            {
               "name": "RCA",
               "value": "2"
            },
            {
               "name": "Оптический S/P-DIF",
               "value": "2 / 1xTosLink /"
            },
            {
               "name": "Коаксиальный S/P-DIF",
               "value": "1"
            },
            {
               "name": "MIDI",
               "value": "1"
            },
            {
               "name": "mini-Jack (3.5 мм)",
               "value": "1"
            },
            {
               "name": "Jack (6.35 мм)",
               "value": "1"
            }
         ],
         "images": [
            {
               "name": "990198_1271490028.jpg",
               "url": "http://magazilla.ru/jpg_zoom1/990198.jpg"
            },
            {
               "name": "fa7tu14hru1_262308311.jpg",
               "url": "http://mzimg.com/big/u1/fa7tu14hru1.jpg"
            },
            {
               "name": "fa7tua9c4i1_1936999619.jpg",
               "url": "http://mzimg.com/big/i1/fa7tua9c4i1.jpg"
            },
            {
               "name": "fa7tu6lyv31_1250451431.jpg",
               "url": "http://mzimg.com/big/31/fa7tu6lyv31.jpg"
            }
         ]
      },
      {
         "sku": "1313346859",
         "name": "Видео карта Creative Sound Blaster Recon3D PCIe",
         "category_id": "1019",
         "quantity": 4,
         "description": "Модель предназначена для максимально качественной передача звукового сопровождения в компьютерных играх. Сконструирована на основе популярного аудиочипа Sound Core3D. Обеспечивает возможность воспроизведения объёмного 5.1-канального звука с 24-битным разрешением, максимальная частота дискретизации составляет 96 кГц, а соотношение сигнал/шум находится на уровне 102 дБ. Отдельного внимания заслуживает встроенный усилитель для наушников с сопротивлением до 600 Ом. Среди прочего отметим поддержку технологии EAX 5.0 HD.",
         "short_description": "",
         "manufacturer": "Creative",
         "weight": "0",
         "height": "0",
         "width": "0",
         "depth": "0",
         "meta_title": "",
         "meta_keywords": "",
         "meta_description": "",
         "product_url": "http://magazilla.ru/desc/creative-sound-blaster-recon3d-pcie/",
         "reviews_number": "",
         "rating": "",
         "price": "2750",
         "price_old": "0",
         "price_wholesale": "0",
         "features": [
            {
               "name": "Вид",
               "value": "геймерская"
            },
            {
               "name": "Тип",
               "value": "внутренняя"
            },
            {
               "name": "Интерфейс подключения",
               "value": "PCIe"
            },
            {
               "name": "Количество каналов",
               "value": "5.1"
            },
            {
               "name": "Аудиочип",
               "value": "Sound Core3D"
            },
            {
               "name": "Поддержка стандартов",
               "value": "EAX 5.0 HD"
            },
            {
               "name": "Поддержка ASIO",
               "value": "да"
            },
            {
               "name": "Разрядность",
               "value": "24 бит"
            },
            {
               "name": "Макс. частота дискретизации",
               "value": "96 кГц"
            },
            {
               "name": "Соотношение сигнал/шум",
               "value": "102 дБ"
            },
            {
               "name": "Дополнительно",
               "value": "Усилитель для наушников / до 600 Ом /"
            },
            {
               "name": "mini-Jack (3.5 мм)",
               "value": "1 / линейный/микрофон /"
            },
            {
               "name": "Оптический S/P-DIF",
               "value": "1"
            }
         ],
         "images": [
            {
               "name": "346859_1854796228.jpg",
               "url": "http://magazilla.ru/jpg_zoom1/346859.jpg"
            }
         ]
      },
      {
         "sku": "1313698676",
         "name": "Видео карта NAD DAC 2",
         "category_id": "1019",
         "quantity": 12,
         "description": "Соотношение сигнал/шум (дБ): 80; Макс. частота дискретизации (кГц): 96; Разрядность (бит): 24; Дополнительное питание; Количество каналов: 2; Интерфейс подключения: USB; Тип: внешняя",
         "short_description": "",
         "manufacturer": "NAD",
         "weight": "0",
         "height": "0",
         "width": "0",
         "depth": "0",
         "meta_title": "",
         "meta_keywords": "",
         "meta_description": "",
         "product_url": "http://magazilla.ru/desc/nad-dac-2/",
         "reviews_number": "",
         "rating": "",
         "price": "22000",
         "price_old": "0",
         "price_wholesale": "0",
         "features": [
            {
               "name": "Тип",
               "value": "внешняя"
            },
            {
               "name": "Интерфейс подключения",
               "value": "USB"
            },
            {
               "name": "Количество каналов",
               "value": "2"
            },
            {
               "name": "Дополнительное питание",
               "value": "да"
            },
            {
               "name": "Разрядность",
               "value": "24 бит"
            },
            {
               "name": "Макс. частота дискретизации",
               "value": "96 кГц"
            },
            {
               "name": "Соотношение сигнал/шум",
               "value": "80 дБ"
            },
            {
               "name": "RCA",
               "value": "2"
            },
            {
               "name": "Коаксиальный S/P-DIF",
               "value": "1"
            }
         ],
         "images": [
            {
               "name": "698676_220289503.jpg",
               "url": "http://magazilla.ru/jpg_zoom1/698676.jpg"
            },
            {
               "name": "eydby99y7u1_596506807.jpg",
               "url": "http://mzimg.com/big/u1/eydby99y7u1.jpg"
            },
            {
               "name": "f7j3o2cq971_-1878640439.jpg",
               "url": "http://mzimg.com/big/71/f7j3o2cq971.jpg"
            },
            {
               "name": "fjranl11w71_1712419114.jpg",
               "url": "http://mzimg.com/big/71/fjranl11w71.jpg"
            }
         ]
      },
      {
         "sku": "1313353732",
         "name": "Видео карта Cambridge DacMagic XS",
         "category_id": "1019",
         "quantity": 7,
         "description": "Соотношение сигнал/шум (дБ): 103; Макс. частота дискретизации (кГц): 192; Разрядность (бит): 24; Поддержка Mac; Количество каналов: 2; Интерфейс подключения: USB; Тип: внешняя; Вид: ЦАП",
         "short_description": "",
         "manufacturer": "Cambridge",
         "weight": "0",
         "height": "0",
         "width": "0",
         "depth": "0",
         "meta_title": "",
         "meta_keywords": "",
         "meta_description": "",
         "product_url": "http://magazilla.ru/desc/cambridge-dacmagic-xs/",
         "reviews_number": "",
         "rating": "",
         "price": "9889",
         "price_old": "0",
         "price_wholesale": "0",
         "features": [
            {
               "name": "Вид",
               "value": "ЦАП"
            },
            {
               "name": "Тип",
               "value": "внешняя"
            },
            {
               "name": "Интерфейс подключения",
               "value": "USB"
            },
            {
               "name": "Количество каналов",
               "value": "2"
            },
            {
               "name": "Аудиочип",
               "value": "ESS9023"
            },
            {
               "name": "Поддержка Mac",
               "value": "да"
            },
            {
               "name": "Разрядность",
               "value": "24 бит"
            },
            {
               "name": "Макс. частота дискретизации",
               "value": "192 кГц"
            },
            {
               "name": "Соотношение сигнал/шум",
               "value": "103 дБ"
            },
            {
               "name": "Дополнительно",
               "value": "Усилитель для наушников"
            },
            {
               "name": "mini-Jack (3.5 мм)",
               "value": "1"
            }
         ],
         "images": [
            {
               "name": "353732_448727067.jpg",
               "url": "http://magazilla.ru/jpg_zoom1/353732.jpg"
            },
            {
               "name": "ed348wtgj01_-121342801.jpg",
               "url": "http://mzimg.com/big/01/ed348wtgj01.jpg"
            }
         ]
      },
      {
         "sku": "1313442212",
         "name": "Видео карта Korg DS-DAC-100M",
         "category_id": "1019",
         "quantity": 5,
         "description": "Соотношение сигнал/шум (дБ): 105; Макс. частота дискретизации (кГц): 192; Разрядность (бит): 24; Поддержка Mac; Количество каналов: 2; Интерфейс подключения: USB; Тип: внешняя; Вид: ЦАП",
         "short_description": "",
         "manufacturer": "Korg",
         "weight": "0",
         "height": "0",
         "width": "0",
         "depth": "0",
         "meta_title": "",
         "meta_keywords": "",
         "meta_description": "",
         "product_url": "http://magazilla.ru/desc/korg-ds-dac-100m/",
         "reviews_number": "",
         "rating": "",
         "price": "22660",
         "price_old": "0",
         "price_wholesale": "0",
         "features": [
            {
               "name": "Вид",
               "value": "ЦАП"
            },
            {
               "name": "Тип",
               "value": "внешняя"
            },
            {
               "name": "Интерфейс подключения",
               "value": "USB"
            },
            {
               "name": "Количество каналов",
               "value": "2"
            },
            {
               "name": "Аудиочип",
               "value": "Cirrus Logic CS4398"
            },
            {
               "name": "Поддержка стандартов",
               "value": "Core Audio, WDM, DSD"
            },
            {
               "name": "Поддержка ASIO",
               "value": "да"
            },
            {
               "name": "Поддержка Mac",
               "value": "да"
            },
            {
               "name": "Разрядность",
               "value": "24 бит"
            },
            {
               "name": "Макс. частота дискретизации",
               "value": "192 кГц"
            },
            {
               "name": "Динамический диапазон",
               "value": "105 дБ"
            },
            {
               "name": "Соотношение сигнал/шум",
               "value": "105 дБ"
            },
            {
               "name": "mini-Jack (3.5 мм)",
               "value": "1"
            }
         ],
         "images": [
            {
               "name": "442212_-1443221947.jpg",
               "url": "http://magazilla.ru/jpg_zoom1/442212.jpg"
            },
            {
               "name": "ejd9wbvwy51_-1686078602.jpg",
               "url": "http://mzimg.com/big/51/ejd9wbvwy51.jpg"
            },
            {
               "name": "ejd9wib7211_-1700815325.jpg",
               "url": "http://mzimg.com/big/11/ejd9wib7211.jpg"
            },
            {
               "name": "ejd9woiv9l1_1000582377.jpg",
               "url": "http://mzimg.com/big/l1/ejd9woiv9l1.jpg"
            },
            {
               "name": "ejd9wv1myj1_-1654536569.jpg",
               "url": "http://mzimg.com/big/j1/ejd9wv1myj1.jpg"
            }
         ]
      },
      {
         "sku": "1313990225",
         "name": "Видео карта RME HDSP 9652",
         "category_id": "1019",
         "quantity": 5,
         "description": "Макс. частота дискретизации (кГц): 96; Разрядность (бит): 24; Поддержка Mac; Количество каналов: 2; Интерфейс подключения: PCI; Тип: внутренняя; Вид: аудиоинтерфейс",
         "short_description": "",
         "manufacturer": "RME",
         "weight": "0",
         "height": "0",
         "width": "0",
         "depth": "0",
         "meta_title": "",
         "meta_keywords": "",
         "meta_description": "",
         "product_url": "http://magazilla.ru/desc/rme-hdsp-9652/",
         "reviews_number": "",
         "rating": "",
         "price": "45710.5",
         "price_old": "0",
         "price_wholesale": "0",
         "features": [
            {
               "name": "Вид",
               "value": "аудиоинтерфейс"
            },
            {
               "name": "Тип",
               "value": "внутренняя"
            },
            {
               "name": "Интерфейс подключения",
               "value": "PCI"
            },
            {
               "name": "Количество каналов",
               "value": "2"
            },
            {
               "name": "Поддержка стандартов",
               "value": "MME, GSIF"
            },
            {
               "name": "Поддержка ASIO",
               "value": "да"
            },
            {
               "name": "Поддержка Mac",
               "value": "да"
            },
            {
               "name": "Разрядность",
               "value": "24 бит"
            },
            {
               "name": "Макс. частота дискретизации",
               "value": "96 кГц"
            },
            {
               "name": "Оптический S/P-DIF",
               "value": "3 / TosLink /"
            },
            {
               "name": "Коаксиальный S/P-DIF",
               "value": "1"
            },
            {
               "name": "MIDI",
               "value": "1"
            }
         ],
         "images": [
            {
               "name": "990225_131451333.jpg",
               "url": "http://magazilla.ru/jpg_zoom1/990225.jpg"
            },
            {
               "name": "fa7uthrdpl1_1866071591.jpg",
               "url": "http://mzimg.com/big/l1/fa7uthrdpl1.jpg"
            }
         ]
      },
      {
         "sku": "1313647731",
         "name": "Видео карта C-Media CMI8738-LX",
         "category_id": "1019",
         "quantity": 5,
         "description": "Макс. частота дискретизации (кГц): 48; Разрядность (бит): 16; Количество каналов: 5.1; Интерфейс подключения: PCI; Тип: внутренняя; Вид: обычная ",
         "short_description": "",
         "manufacturer": "C-Media",
         "weight": "0",
         "height": "0",
         "width": "0",
         "depth": "0",
         "meta_title": "",
         "meta_keywords": "",
         "meta_description": "",
         "product_url": "http://magazilla.ru/desc/c-media-cmi8738-lx/",
         "reviews_number": "",
         "rating": "",
         "price": "781",
         "price_old": "0",
         "price_wholesale": "0",
         "features": [
            {
               "name": "Вид",
               "value": "обычная"
            },
            {
               "name": "Тип",
               "value": "внутренняя"
            },
            {
               "name": "Интерфейс подключения",
               "value": "PCI / 2.1 /"
            },
            {
               "name": "Количество каналов",
               "value": "5.1"
            },
            {
               "name": "Аудиочип",
               "value": "CMI8738"
            },
            {
               "name": "Разрядность",
               "value": "16 бит"
            },
            {
               "name": "Макс. частота дискретизации",
               "value": "48 кГц"
            },
            {
               "name": "Дополнительно",
               "value": "Усилитель для наушников"
            },
            {
               "name": "mini-Jack (3.5 мм)",
               "value": "4"
            }
         ],
         "images": [
            {
               "name": "647731_-1574929946.jpg",
               "url": "http://magazilla.ru/jpg_zoom1/647731.jpg"
            }
         ]
      },
      {
         "sku": "1313345979",
         "name": "Видео карта Asus Xonar D1",
         "category_id": "1019",
         "quantity": 5,
         "description": "Принадлежит к семейству игровых звуковых карт Xonar производства бренда Asus. Способна обеспечить реализацию 7.1-канальной аудиосистемы, может похвастаться поддержкой полного спектра технологий Dolby Home Theater. В основе устройства находится аудиочип AV100, позволяющий обрабатывать данные с частотой дискретизации до 192 кГц и максимальной глубиной в 24 бита. Соотношение сигнал/шум на уровне 116 дБ. Обратим внимание, что для подключения используется интерфейс PCI. В свою очередь, для интерфейса PCIе предусмотрена аналогичная модель XONAR DX. ",
         "short_description": "",
         "manufacturer": "Asus",
         "weight": "0",
         "height": "0",
         "width": "0",
         "depth": "0",
         "meta_title": "",
         "meta_keywords": "",
         "meta_description": "",
         "product_url": "http://magazilla.ru/desc/asus-xonar-d1/",
         "reviews_number": "",
         "rating": "",
         "price": "5175.5",
         "price_old": "0",
         "price_wholesale": "0",
         "features": [
            {
               "name": "Вид",
               "value": "геймерская"
            },
            {
               "name": "Тип",
               "value": "внутренняя"
            },
            {
               "name": "Интерфейс подключения",
               "value": "PCI"
            },
            {
               "name": "Количество каналов",
               "value": "7.1"
            },
            {
               "name": "Аудиочип",
               "value": "ASUS AV100"
            },
            {
               "name": "Поддержка стандартов",
               "value": "Dolby Digital Live, Dolby Headphone, Dolby Virtual Speaker / Dolby Pro Logic /"
            },
            {
               "name": "Поддержка ASIO",
               "value": "да"
            },
            {
               "name": "Разрядность",
               "value": "24 бит"
            },
            {
               "name": "Макс. частота дискретизации",
               "value": "192 кГц"
            },
            {
               "name": "Соотношение сигнал/шум",
               "value": "116 дБ"
            },
            {
               "name": "mini-Jack (3.5 мм)",
               "value": "1 / линейный/микрофон /"
            },
            {
               "name": "Оптический S/P-DIF",
               "value": "1"
            }
         ],
         "images": [
            {
               "name": "345979_-2135349303.jpg",
               "url": "http://magazilla.ru/jpg_zoom1/345979.jpg"
            },
            {
               "name": "ebydyrx91g1_-1276252018.jpg",
               "url": "http://mzimg.com/big/g1/ebydyrx91g1.jpg"
            }
         ]
      },
      {
         "sku": "1313990198",
         "name": "Видео карта RME HDSP 9632",
         "category_id": "1019",
         "quantity": 13,
         "description": "Соотношение сигнал/шум (дБ): 110; Макс. частота дискретизации (кГц): 192; Разрядность (бит): 24; Поддержка Mac; Количество каналов: 2; Интерфейс подключения: PCI; Тип: внутренняя; Вид: аудиоинтерфейс <div rel=\"v:rating\"><span typeof=\"v:Rating\">Рейтинг модели: <span property='v:value'>5</span> из <span property=\"v:best\">5</span> (<span property=\"v:count\">2</span> оценки)</span></div>",
         "short_description": "",
         "manufacturer": "RME",
         "weight": "0",
         "height": "0",
         "width": "0",
         "depth": "0",
         "meta_title": "",
         "meta_keywords": "",
         "meta_description": "",
         "product_url": "http://magazilla.ru/desc/rme-hdsp-9632/",
         "reviews_number": "",
         "rating": "",
         "price": "30343.5",
         "price_old": "0",
         "price_wholesale": "0",
         "features": [
            {
               "name": "Вид",
               "value": "аудиоинтерфейс"
            },
            {
               "name": "Тип",
               "value": "внутренняя"
            },
            {
               "name": "Интерфейс подключения",
               "value": "PCI"
            },
            {
               "name": "Количество каналов",
               "value": "2"
            },
            {
               "name": "Поддержка ASIO",
               "value": "да"
            },
            {
               "name": "Поддержка Mac",
               "value": "да"
            },
            {
               "name": "Разрядность",
               "value": "24 бит"
            },
            {
               "name": "Макс. частота дискретизации",
               "value": "192 кГц"
            },
            {
               "name": "Соотношение сигнал/шум",
               "value": "110 дБ"
            },
            {
               "name": "RCA",
               "value": "2"
            },
            {
               "name": "Оптический S/P-DIF",
               "value": "2 / 1xTosLink /"
            },
            {
               "name": "Коаксиальный S/P-DIF",
               "value": "1"
            },
            {
               "name": "MIDI",
               "value": "1"
            },
            {
               "name": "mini-Jack (3.5 мм)",
               "value": "1"
            },
            {
               "name": "Jack (6.35 мм)",
               "value": "1"
            }
         ],
         "images": [
            {
               "name": "990198_1271490028.jpg",
               "url": "http://magazilla.ru/jpg_zoom1/990198.jpg"
            },
            {
               "name": "fa7tu14hru1_262308311.jpg",
               "url": "http://mzimg.com/big/u1/fa7tu14hru1.jpg"
            },
            {
               "name": "fa7tua9c4i1_1936999619.jpg",
               "url": "http://mzimg.com/big/i1/fa7tua9c4i1.jpg"
            },
            {
               "name": "fa7tu6lyv31_1250451431.jpg",
               "url": "http://mzimg.com/big/31/fa7tu6lyv31.jpg"
            }
         ]
      },
      {
         "sku": "519416",
         "name": "Модем Huawei E3372",
         "category_id": "1029",
         "quantity": 9,
         "description": "Вес (г): 35; Габариты (мм): 88x28x11.5; Питание: от USB; слот для SIM-карты; разъем для карты памяти; разъем для внешней антенны; 3mob; Интертелеком; Vodafone; lifecell; Киевстар; Йота; МегаФон; MTC; Билайн; EV-DO rev. A (до 3.1 Мбит/с); LTE (до 173 Мбит/с); HSPA+ (70 Мбит/с); HSDPA (до 14.4 Мбит/с)",
         "short_description": "",
         "manufacturer": "Huawei",
         "weight": "0",
         "height": "0",
         "width": "0",
         "depth": "0",
         "meta_title": "",
         "meta_keywords": "",
         "meta_description": "",
         "product_url": "http://magazilla.ru/desc/huawei-e3372/",
         "reviews_number": "",
         "rating": "",
         "price": "2176.9",
         "price_old": "0",
         "price_wholesale": "0",
         "features": [
            {
               "name": "Тип",
               "value": "модем (к устройству)"
            },
            {
               "name": "Поколение связи",
               "value": "2G, 3G, 4G (LTE)"
            },
            {
               "name": "Технология передачи",
               "value": "GPRS (до 80 Кбит/с), EDGE (до 240 Кбит/с), W-CDMA (до 2 Мбит/с), HSUPA (до 5.7 Мбит/с), HSDPA (до 14.4 Мбит/с), HSPA+ (70 Мбит/с), LTE (до 173 Мбит/с), EV-DO rev. A (до 3.1 Мбит/с)"
            },
            {
               "name": "Оператор (провайдер)",
               "value": "Билайн, MTC, МегаФон, Йота, Киевстар, lifecell, Vodafone, Интертелеком, 3mob"
            },
            {
               "name": "Функции/возможности",
               "value": "разъем для внешней антенны, разъем для карты памяти / microSD /, слот для SIM-карты"
            },
            {
               "name": "Подключение и разъемы",
               "value": "USB / 2.0 /"
            },
            {
               "name": "Питание",
               "value": "от USB"
            },
            {
               "name": "Габариты",
               "value": "88x28x11.5 мм"
            },
            {
               "name": "Вес",
               "value": "35 г"
            }
         ],
         "images": [
            {
               "name": "519416_-1216002098.jpg",
               "url": "http://magazilla.ru/jpg/519416.jpg"
            }
         ]
      },
      {
         "sku": "791478",
         "name": "Модем Huawei E5573",
         "category_id": "1029",
         "quantity": 15,
         "description": "Вес (г): 95; Питание: от аккумулятора; Ёмкость аккумулятора (мАч): 1500; слот для SIM-карты; разъем для внешней антенны; 3mob; Vodafone; lifecell; Киевстар; Йота; МегаФон; MTC; Билайн; LTE (до 173 Мбит/с); HSPA+ (70 Мбит/с); HSDPA (до 14.4 Мбит/с); HSUPA (до 5.7 Мбит/с); W-CDMA (до 2 Мбит/с); EDGE (до 240 Кбит/с)",
         "short_description": "",
         "manufacturer": "Huawei",
         "weight": "0",
         "height": "0",
         "width": "0",
         "depth": "0",
         "meta_title": "",
         "meta_keywords": "",
         "meta_description": "",
         "product_url": "http://magazilla.ru/desc/huawei-e5573/",
         "reviews_number": "",
         "rating": "",
         "price": "2970",
         "price_old": "0",
         "price_wholesale": "0",
         "features": [
            {
               "name": "Тип",
               "value": "переносная Wi-Fi точка"
            },
            {
               "name": "Поколение связи",
               "value": "2G, 3G, 4G (LTE)"
            },
            {
               "name": "Технология передачи",
               "value": "GPRS (до 80 Кбит/с), EDGE (до 240 Кбит/с), W-CDMA (до 2 Мбит/с), HSUPA (до 5.7 Мбит/с), HSDPA (до 14.4 Мбит/с), HSPA+ (70 Мбит/с), LTE (до 173 Мбит/с)"
            },
            {
               "name": "Оператор (провайдер)",
               "value": "Билайн, MTC, МегаФон, Йота, Киевстар, lifecell, Vodafone, 3mob"
            },
            {
               "name": "Функции/возможности",
               "value": "разъем для внешней антенны, слот для SIM-карты"
            },
            {
               "name": "Скорость подключения Wi-Fi",
               "value": "до 11 Мбит/сек (802.11b), до 54 Мбит/сек (802.11g), до 300 Мбит/сек (802.11n)"
            },
            {
               "name": "Радиус действия",
               "value": "10 м"
            },
            {
               "name": "Кол-во подключаемых устройств",
               "value": "10"
            },
            {
               "name": "Ёмкость аккумулятора",
               "value": "1500 мАч"
            },
            {
               "name": "Подключение и разъемы",
               "value": "microUSB, Wi-Fi"
            },
            {
               "name": "Питание",
               "value": "от аккумулятора"
            },
            {
               "name": "Вес",
               "value": "95 г"
            }
         ],
         "images": [
            {
               "name": "791478_942671321.jpg",
               "url": "http://magazilla.ru/jpg_zoom1/791478.jpg"
            },
            {
               "name": "f2o3r52fhm1_-1218646795.jpg",
               "url": "http://mzimg.com/big/m1/f2o3r52fhm1.jpg"
            },
            {
               "name": "f2o3rdmlgw1_-734479379.jpg",
               "url": "http://mzimg.com/big/w1/f2o3rdmlgw1.jpg"
            }
         ]
      },
      {
         "sku": "634505",
         "name": "Модем Huawei E8372",
         "category_id": "1029",
         "quantity": 3,
         "description": "Вес (г): 40; Габариты (мм): 94x30x14; Питание: от USB; слот для SIM-карты; разъем для карты памяти; разъем для внешней антенны; 3mob; Vodafone; lifecell; Киевстар; Йота; МегаФон; MTC; Билайн; LTE (до 173 Мбит/с); HSPA+ (70 Мбит/с); HSDPA (до 14.4 Мбит/с); HSUPA (до 5.7 Мбит/с); W-CDMA (до 2 Мбит/с)",
         "short_description": "",
         "manufacturer": "Huawei",
         "weight": "0",
         "height": "0",
         "width": "0",
         "depth": "0",
         "meta_title": "",
         "meta_keywords": "",
         "meta_description": "",
         "product_url": "http://magazilla.ru/desc/huawei-e8372/",
         "reviews_number": "",
         "rating": "",
         "price": "2659.8",
         "price_old": "0",
         "price_wholesale": "0",
         "features": [
            {
               "name": "Тип",
               "value": "переносная Wi-Fi точка"
            },
            {
               "name": "Поколение связи",
               "value": "2G, 3G, 4G (LTE)"
            },
            {
               "name": "Технология передачи",
               "value": "GPRS (до 80 Кбит/с), EDGE (до 240 Кбит/с), W-CDMA (до 2 Мбит/с), HSUPA (до 5.7 Мбит/с), HSDPA (до 14.4 Мбит/с), HSPA+ (70 Мбит/с), LTE (до 173 Мбит/с)"
            },
            {
               "name": "Оператор (провайдер)",
               "value": "Билайн, MTC, МегаФон, Йота, Киевстар, lifecell, Vodafone, 3mob"
            },
            {
               "name": "Функции/возможности",
               "value": "разъем для внешней антенны, разъем для карты памяти / microSD /, слот для SIM-карты"
            },
            {
               "name": "Скорость подключения Wi-Fi",
               "value": "до 11 Мбит/сек (802.11b), до 54 Мбит/сек (802.11g), до 300 Мбит/сек (802.11n)"
            },
            {
               "name": "Кол-во подключаемых устройств",
               "value": "10"
            },
            {
               "name": "Подключение и разъемы",
               "value": "USB / 2.0 /"
            },
            {
               "name": "Питание",
               "value": "от USB"
            },
            {
               "name": "Габариты",
               "value": "94x30x14 мм"
            },
            {
               "name": "Вес",
               "value": "40 г"
            }
         ],
         "images": [
            {
               "name": "634505_-1267480542.jpg",
               "url": "http://magazilla.ru/jpg_zoom1/634505.jpg"
            },
            {
               "name": "ev97sqbp5p1_-2076704943.jpg",
               "url": "http://mzimg.com/big/p1/ev97sqbp5p1.jpg"
            },
            {
               "name": "ev97svchgi1_1323723512.jpg",
               "url": "http://mzimg.com/big/i1/ev97svchgi1.jpg"
            },
            {
               "name": "ev97t0ske91_1198956607.jpg",
               "url": "http://mzimg.com/big/91/ev97t0ske91.jpg"
            },
            {
               "name": "ev97t68whm1_-1848422586.jpg",
               "url": "http://mzimg.com/big/m1/ev97t68whm1.jpg"
            },
            {
               "name": "ev97tb1srk1_1128370940.jpg",
               "url": "http://mzimg.com/big/k1/ev97tb1srk1.jpg"
            },
            {
               "name": "ev97ti3nts1_716387890.jpg",
               "url": "http://mzimg.com/big/s1/ev97ti3nts1.jpg"
            },
            {
               "name": "ev97txlsgw1_1511302722.jpg",
               "url": "http://mzimg.com/big/w1/ev97txlsgw1.jpg"
            },
            {
               "name": "ev97u2yjpu1_-2036039016.jpg",
               "url": "http://mzimg.com/big/u1/ev97u2yjpu1.jpg"
            },
            {
               "name": "ev97tqapqw1_727300399.jpg",
               "url": "http://mzimg.com/big/w1/ev97tqapqw1.jpg"
            }
         ]
      },
      {
         "sku": "519673",
         "name": "Модем Huawei E5776",
         "category_id": "1029",
         "quantity": 3,
         "description": "Вес (г): 150; Габариты (мм): 106.4x66x15.5; Питание: от аккумулятора; Время работы в режиме ожидания (ч): 500; Время работы в режиме интернет-серфинга (ч): 10; Ёмкость аккумулятора (мАч): 3000; дисплей; слот для SIM-карты; разъем для карты памяти; разъем для внешней антенны.",
         "short_description": "",
         "manufacturer": "Huawei",
         "weight": "0",
         "height": "0",
         "width": "0",
         "depth": "0",
         "meta_title": "",
         "meta_keywords": "",
         "meta_description": "",
         "product_url": "http://magazilla.ru/desc/huawei-e5776/",
         "reviews_number": "",
         "rating": "",
         "price": "1254",
         "price_old": "0",
         "price_wholesale": "0",
         "features": [
            {
               "name": "Тип",
               "value": "переносная Wi-Fi точка"
            },
            {
               "name": "Поколение связи",
               "value": "2G, 3G, 4G (LTE)"
            },
            {
               "name": "Технология передачи",
               "value": "GPRS (до 80 Кбит/с), EDGE (до 240 Кбит/с), W-CDMA (до 2 Мбит/с), HSUPA (до 5.7 Мбит/с), HSDPA (до 14.4 Мбит/с), HSPA+ (70 Мбит/с), LTE (до 173 Мбит/с)"
            },
            {
               "name": "Оператор (провайдер)",
               "value": "Билайн, MTC, МегаФон, Йота, Киевстар, lifecell, Vodafone, 3mob"
            },
            {
               "name": "Функции/возможности",
               "value": "разъем для внешней антенны, разъем для карты памяти / microSD, до 32 ГБ /, слот для SIM-карты, дисплей"
            },
            {
               "name": "Скорость подключения Wi-Fi",
               "value": "до 11 Мбит/сек (802.11b), до 54 Мбит/сек (802.11g), до 300 Мбит/сек (802.11n)"
            },
            {
               "name": "Кол-во подключаемых устройств",
               "value": "10"
            },
            {
               "name": "Ёмкость аккумулятора",
               "value": "3000 мАч"
            },
            {
               "name": "Время работы в режиме интернет-серфинга",
               "value": "10 ч"
            },
            {
               "name": "Время работы в режиме ожидания",
               "value": "500 ч"
            },
            {
               "name": "Подключение и разъемы",
               "value": "USB / micro /, Wi-Fi"
            },
            {
               "name": "Питание",
               "value": "от аккумулятора"
            },
            {
               "name": "Габариты",
               "value": "106.4x66x15.5 мм"
            },
            {
               "name": "Вес",
               "value": "150 г"
            }
         ],
         "images": [
            {
               "name": "519673_1877022231.jpg",
               "url": "http://magazilla.ru/jpg_zoom1/519673.jpg"
            },
            {
               "name": "eoo94m49dx1_374410929.jpg",
               "url": "http://mzimg.com/big/x1/eoo94m49dx1.jpg"
            },
            {
               "name": "eoo9686mw71_-368371824.jpg",
               "url": "http://mzimg.com/big/71/eoo9686mw71.jpg"
            },
            {
               "name": "eoo96fn93y1_46459098.jpg",
               "url": "http://mzimg.com/big/y1/eoo96fn93y1.jpg"
            },
            {
               "name": "eoo96ljttr1_15860750.jpg",
               "url": "http://mzimg.com/big/r1/eoo96ljttr1.jpg"
            }
         ]
      },
      {
         "sku": "519448",
         "name": "Модем Huawei E8231",
         "category_id": "1029",
         "quantity": 7,
         "description": "Вес (г): 30; Габариты (мм): 88х27х11.5; Питание: от USB; слот для SIM-карты; 3mob; Vodafone; lifecell; Киевстар; МегаФон; MTC; Билайн; HSPA+ (70 Мбит/с); HSDPA (до 14.4 Мбит/с); HSUPA (до 5.7 Мбит/с); W-CDMA (до 2 Мбит/с); EDGE (до 240 Кбит/с); GPRS (до 80 Кбит/с); 3G; Поколение связи: 2G; Тип: переносная Wi-Fi точка",
         "short_description": "",
         "manufacturer": "Huawei",
         "weight": "0",
         "height": "0",
         "width": "0",
         "depth": "0",
         "meta_title": "",
         "meta_keywords": "",
         "meta_description": "",
         "product_url": "http://magazilla.ru/desc/huawei-e8231/",
         "reviews_number": "",
         "rating": "",
         "price": "1804",
         "price_old": "0",
         "price_wholesale": "0",
         "features": [
            {
               "name": "Тип",
               "value": "переносная Wi-Fi точка"
            },
            {
               "name": "Поколение связи",
               "value": "2G, 3G"
            },
            {
               "name": "Технология передачи",
               "value": "GPRS (до 80 Кбит/с), EDGE (до 240 Кбит/с), W-CDMA (до 2 Мбит/с), HSUPA (до 5.7 Мбит/с), HSDPA (до 14.4 Мбит/с), HSPA+ (70 Мбит/с)"
            },
            {
               "name": "Оператор (провайдер)",
               "value": "Билайн, MTC, МегаФон, Киевстар, lifecell, Vodafone, 3mob"
            },
            {
               "name": "Функции/возможности",
               "value": "слот для SIM-карты"
            },
            {
               "name": "Скорость подключения Wi-Fi",
               "value": "до 11 Мбит/сек (802.11b), до 54 Мбит/сек (802.11g), до 300 Мбит/сек (802.11n)"
            },
            {
               "name": "Кол-во подключаемых устройств",
               "value": "10"
            },
            {
               "name": "Подключение и разъемы",
               "value": "USB / v2.0 /, Wi-Fi"
            },
            {
               "name": "Питание",
               "value": "от USB"
            },
            {
               "name": "Габариты",
               "value": "88х27х11.5 мм"
            },
            {
               "name": "Вес",
               "value": "30 г"
            }
         ],
         "images": [
            {
               "name": "519448_-1354156836.jpg",
               "url": "http://magazilla.ru/jpg_zoom1/519448.jpg"
            },
            {
               "name": "eoo4e0k3ld1_-1267212689.jpg",
               "url": "http://mzimg.com/big/d1/eoo4e0k3ld1.jpg"
            },
            {
               "name": "eoo4efhsm51_-1617914416.jpg",
               "url": "http://mzimg.com/big/51/eoo4efhsm51.jpg"
            },
            {
               "name": "eoo4eloc7h1_474504881.jpg",
               "url": "http://mzimg.com/big/h1/eoo4eloc7h1.jpg"
            },
            {
               "name": "eoo4errkho1_-320594176.jpg",
               "url": "http://mzimg.com/big/o1/eoo4errkho1.jpg"
            },
            {
               "name": "eoo4eyqtzy1_-228996910.jpg",
               "url": "http://mzimg.com/big/y1/eoo4eyqtzy1.jpg"
            },
            {
               "name": "eoo4f8thp21_-1742129653.jpg",
               "url": "http://mzimg.com/big/21/eoo4f8thp21.jpg"
            },
            {
               "name": "eoo4e8pdel1_1296915520.jpg",
               "url": "http://mzimg.com/big/l1/eoo4e8pdel1.jpg"
            }
         ]
      },
      {
         "sku": "952694",
         "name": "Модем Huawei E5577",
         "category_id": "1029",
         "quantity": 13,
         "description": "Вес (г): 110; Габариты (мм): 96.8x58x17.3; Питание: от аккумулятора; Ёмкость аккумулятора (мАч): 1500; дисплей; слот для SIM-карты; разъем для карты памяти; разъем для внешней антенны; 3mob; Vodafone; lifecell; Киевстар; Йота; МегаФон; MTC; Билайн; LTE (до 173 Мбит/с); HSPA+ (70 Мбит/с); HSDPA (до 14.4 Мбит/с) ",
         "short_description": "",
         "manufacturer": "Huawei",
         "weight": "0",
         "height": "0",
         "width": "0",
         "depth": "0",
         "meta_title": "",
         "meta_keywords": "",
         "meta_description": "",
         "product_url": "http://magazilla.ru/desc/huawei-e5577/",
         "reviews_number": "",
         "rating": "",
         "price": "4620",
         "price_old": "0",
         "price_wholesale": "0",
         "features": [
            {
               "name": "Тип",
               "value": "переносная Wi-Fi точка"
            },
            {
               "name": "Поколение связи",
               "value": "2G, 3G, 4G (LTE)"
            },
            {
               "name": "Технология передачи",
               "value": "GPRS (до 80 Кбит/с), EDGE (до 240 Кбит/с), W-CDMA (до 2 Мбит/с), HSUPA (до 5.7 Мбит/с), HSDPA (до 14.4 Мбит/с), HSPA+ (70 Мбит/с), LTE (до 173 Мбит/с)"
            },
            {
               "name": "Оператор (провайдер)",
               "value": "Билайн, MTC, МегаФон, Йота, Киевстар, lifecell, Vodafone, 3mob"
            },
            {
               "name": "Функции/возможности",
               "value": "разъем для внешней антенны / 2 шт /, разъем для карты памяти, слот для SIM-карты, дисплей / 1.45 '' /"
            },
            {
               "name": "Скорость подключения Wi-Fi",
               "value": "до 11 Мбит/сек (802.11b), до 54 Мбит/сек (802.11g), до 300 Мбит/сек (802.11n)"
            },
            {
               "name": "Радиус действия",
               "value": "10 м"
            },
            {
               "name": "Кол-во подключаемых устройств",
               "value": "10"
            },
            {
               "name": "Ёмкость аккумулятора",
               "value": "1500 мАч"
            },
            {
               "name": "Подключение и разъемы",
               "value": "microUSB, Wi-Fi"
            },
            {
               "name": "Питание",
               "value": "от аккумулятора"
            },
            {
               "name": "Габариты",
               "value": "96.8x58x17.3 мм"
            },
            {
               "name": "Вес",
               "value": "110 г"
            }
         ],
         "images": [
            {
               "name": "952694_1245734318.jpg",
               "url": "http://magazilla.ru/jpg_zoom1/952694.jpg"
            },
            {
               "name": "f8zv64s10l1_53528379.jpeg",
               "url": "http://mzimg.com/big/l1/f8zv64s10l1.jpeg"
            },
            {
               "name": "f8zv6bc21f1_-1401133209.jpg",
               "url": "http://mzimg.com/big/f1/f8zv6bc21f1.jpg"
            },
            {
               "name": "f8zv6t4f8k1_191918109.jpg",
               "url": "http://mzimg.com/big/k1/f8zv6t4f8k1.jpg"
            }
         ]
      },
      {
         "sku": "519551",
         "name": "Модем ZTE MF823",
         "category_id": "1029",
         "quantity": 5,
         "description": "Вес (г): 45; Габариты (мм): 91x34x13; Питание: от USB; слот для SIM-карты; разъем для карты памяти; 3mob; Vodafone; lifecell; Киевстар; Йота; МегаФон; MTC; Билайн; LTE (до 173 Мбит/с); HSPA+ (70 Мбит/с); HSDPA (до 14.4 Мбит/с); HSUPA (до 5.7 Мбит/с); W-CDMA (до 2 Мбит/с); EDGE (до 240 Кбит/с); GPRS (до 80 Кбит/с)",
         "short_description": "",
         "manufacturer": "ZTE",
         "weight": "0",
         "height": "0",
         "width": "0",
         "depth": "0",
         "meta_title": "",
         "meta_keywords": "",
         "meta_description": "",
         "product_url": "http://magazilla.ru/desc/zte-mf823/",
         "reviews_number": "",
         "rating": "",
         "price": "2253.9",
         "price_old": "0",
         "price_wholesale": "0",
         "features": [
            {
               "name": "Тип",
               "value": "модем (к устройству)"
            },
            {
               "name": "Поколение связи",
               "value": "2G, 3G, 4G (LTE)"
            },
            {
               "name": "Технология передачи",
               "value": "GPRS (до 80 Кбит/с), EDGE (до 240 Кбит/с), W-CDMA (до 2 Мбит/с), HSUPA (до 5.7 Мбит/с), HSDPA (до 14.4 Мбит/с), HSPA+ (70 Мбит/с), LTE (до 173 Мбит/с)"
            },
            {
               "name": "Оператор (провайдер)",
               "value": "Билайн, MTC, МегаФон, Йота, Киевстар, lifecell, Vodafone, 3mob"
            },
            {
               "name": "Функции/возможности",
               "value": "разъем для карты памяти / microSD /, слот для SIM-карты"
            },
            {
               "name": "Подключение и разъемы",
               "value": "USB / v2.0 /"
            },
            {
               "name": "Питание",
               "value": "от USB"
            },
            {
               "name": "Габариты",
               "value": "91x34x13 мм"
            },
            {
               "name": "Вес",
               "value": "45 г"
            }
         ],
         "images": [
            {
               "name": "eoo6a7kpu31_1943399045.jpg",
               "url": "http://mzimg.com/big/31/eoo6a7kpu31.jpg"
            },
            {
               "name": "eoo6anp5nw1_-1927778421.jpg",
               "url": "http://mzimg.com/big/w1/eoo6anp5nw1.jpg"
            },
            {
               "name": "eoo6auhay31_1378687229.jpg",
               "url": "http://mzimg.com/big/31/eoo6auhay31.jpg"
            },
            {
               "name": "eoo6azqny41_283916083.jpg",
               "url": "http://mzimg.com/big/41/eoo6azqny41.jpg"
            }
         ]
      },
      {
         "sku": "1270019",
         "name": "Модем ZTE MF93D",
         "category_id": "1029",
         "quantity": 7,
         "description": "Вес (г): 120; Габариты (мм): 107х61х16; Питание: от аккумулятора; Время работы в режиме интернет-серфинга (ч): 10; Ёмкость аккумулятора (мАч): 2800; дисплей; слот для SIM-карты; разъем для внешней антенны; 3mob; Vodafone; lifecell; Киевстар; Йота; МегаФон; MTC; Билайн; LTE (до 173 Мбит/с); HSPA+ (70 Мбит/с)",
         "short_description": "",
         "manufacturer": "ZTE",
         "weight": "0",
         "height": "0",
         "width": "0",
         "depth": "0",
         "meta_title": "",
         "meta_keywords": "",
         "meta_description": "",
         "product_url": "http://magazilla.ru/desc/zte-mf93d/",
         "reviews_number": "",
         "rating": "",
         "price": "1199",
         "price_old": "0",
         "price_wholesale": "0",
         "features": [
            {
               "name": "Тип",
               "value": "переносная Wi-Fi точка"
            },
            {
               "name": "Поколение связи",
               "value": "2G, 3G, 4G (LTE)"
            },
            {
               "name": "Технология передачи",
               "value": "GPRS (до 80 Кбит/с), EDGE (до 240 Кбит/с), W-CDMA (до 2 Мбит/с), HSUPA (до 5.7 Мбит/с), HSDPA (до 14.4 Мбит/с), HSPA+ (70 Мбит/с), LTE (до 173 Мбит/с)"
            },
            {
               "name": "Оператор (провайдер)",
               "value": "Билайн, MTC, МегаФон, Йота, Киевстар, lifecell, Vodafone, 3mob"
            },
            {
               "name": "Функции/возможности",
               "value": "разъем для внешней антенны / 2 шт /, слот для SIM-карты, дисплей"
            },
            {
               "name": "Скорость подключения Wi-Fi",
               "value": "до 11 Мбит/сек (802.11b), до 54 Мбит/сек (802.11g), до 300 Мбит/сек (802.11n)"
            },
            {
               "name": "Кол-во подключаемых устройств",
               "value": "8"
            },
            {
               "name": "Ёмкость аккумулятора",
               "value": "2800 мАч"
            },
            {
               "name": "Время работы в режиме интернет-серфинга",
               "value": "10 ч"
            },
            {
               "name": "Подключение и разъемы",
               "value": "Wi-Fi"
            },
            {
               "name": "Питание",
               "value": "от аккумулятора"
            },
            {
               "name": "Габариты",
               "value": "107х61х16 мм"
            },
            {
               "name": "Вес",
               "value": "120 г"
            }
         ],
         "images": [
            {
               "name": "1270019_265169315.jpg",
               "url": "http://magazilla.ru/jpg_zoom1/1270019.jpg"
            }
         ]
      },
      {
         "sku": "69519416",
         "name": "Роутер Huawei E3372",
         "category_id": "1030",
         "quantity": 9,
         "description": "Вес (г): 35; Габариты (мм): 88x28x11.5; Питание: от USB; слот для SIM-карты; разъем для карты памяти; разъем для внешней антенны; 3mob; Интертелеком; Vodafone; lifecell; Киевстар; Йота; МегаФон; MTC; Билайн; EV-DO rev. A (до 3.1 Мбит/с); LTE (до 173 Мбит/с); HSPA+ (70 Мбит/с); HSDPA (до 14.4 Мбит/с)",
         "short_description": "",
         "manufacturer": "Huawei",
         "weight": "0",
         "height": "0",
         "width": "0",
         "depth": "0",
         "meta_title": "",
         "meta_keywords": "",
         "meta_description": "",
         "product_url": "http://magazilla.ru/desc/huawei-e3372/",
         "reviews_number": "",
         "rating": "",
         "price": "2176.9",
         "price_old": "0",
         "price_wholesale": "0",
         "features": [
            {
               "name": "Тип",
               "value": "Роутер (к устройству)"
            },
            {
               "name": "Поколение связи",
               "value": "2G, 3G, 4G (LTE)"
            },
            {
               "name": "Технология передачи",
               "value": "GPRS (до 80 Кбит/с), EDGE (до 240 Кбит/с), W-CDMA (до 2 Мбит/с), HSUPA (до 5.7 Мбит/с), HSDPA (до 14.4 Мбит/с), HSPA+ (70 Мбит/с), LTE (до 173 Мбит/с), EV-DO rev. A (до 3.1 Мбит/с)"
            },
            {
               "name": "Оператор (провайдер)",
               "value": "Билайн, MTC, МегаФон, Йота, Киевстар, lifecell, Vodafone, Интертелеком, 3mob"
            },
            {
               "name": "Функции/возможности",
               "value": "разъем для внешней антенны, разъем для карты памяти / microSD /, слот для SIM-карты"
            },
            {
               "name": "Подключение и разъемы",
               "value": "USB / 2.0 /"
            },
            {
               "name": "Питание",
               "value": "от USB"
            },
            {
               "name": "Габариты",
               "value": "88x28x11.5 мм"
            },
            {
               "name": "Вес",
               "value": "35 г"
            }
         ],
         "images": [
            {
               "name": "519416_-1216002098.jpg",
               "url": "http://magazilla.ru/jpg/519416.jpg"
            }
         ]
      },
      {
         "sku": "69791478",
         "name": "Роутер Huawei E5573",
         "category_id": "1030",
         "quantity": 15,
         "description": "Вес (г): 95; Питание: от аккумулятора; Ёмкость аккумулятора (мАч): 1500; слот для SIM-карты; разъем для внешней антенны; 3mob; Vodafone; lifecell; Киевстар; Йота; МегаФон; MTC; Билайн; LTE (до 173 Мбит/с); HSPA+ (70 Мбит/с); HSDPA (до 14.4 Мбит/с); HSUPA (до 5.7 Мбит/с); W-CDMA (до 2 Мбит/с); EDGE (до 240 Кбит/с)",
         "short_description": "",
         "manufacturer": "Huawei",
         "weight": "0",
         "height": "0",
         "width": "0",
         "depth": "0",
         "meta_title": "",
         "meta_keywords": "",
         "meta_description": "",
         "product_url": "http://magazilla.ru/desc/huawei-e5573/",
         "reviews_number": "",
         "rating": "",
         "price": "2970",
         "price_old": "0",
         "price_wholesale": "0",
         "features": [
            {
               "name": "Тип",
               "value": "переносная Wi-Fi точка"
            },
            {
               "name": "Поколение связи",
               "value": "2G, 3G, 4G (LTE)"
            },
            {
               "name": "Технология передачи",
               "value": "GPRS (до 80 Кбит/с), EDGE (до 240 Кбит/с), W-CDMA (до 2 Мбит/с), HSUPA (до 5.7 Мбит/с), HSDPA (до 14.4 Мбит/с), HSPA+ (70 Мбит/с), LTE (до 173 Мбит/с)"
            },
            {
               "name": "Оператор (провайдер)",
               "value": "Билайн, MTC, МегаФон, Йота, Киевстар, lifecell, Vodafone, 3mob"
            },
            {
               "name": "Функции/возможности",
               "value": "разъем для внешней антенны, слот для SIM-карты"
            },
            {
               "name": "Скорость подключения Wi-Fi",
               "value": "до 11 Мбит/сек (802.11b), до 54 Мбит/сек (802.11g), до 300 Мбит/сек (802.11n)"
            },
            {
               "name": "Радиус действия",
               "value": "10 м"
            },
            {
               "name": "Кол-во подключаемых устройств",
               "value": "10"
            },
            {
               "name": "Ёмкость аккумулятора",
               "value": "1500 мАч"
            },
            {
               "name": "Подключение и разъемы",
               "value": "microUSB, Wi-Fi"
            },
            {
               "name": "Питание",
               "value": "от аккумулятора"
            },
            {
               "name": "Вес",
               "value": "95 г"
            }
         ],
         "images": [
            {
               "name": "791478_942671321.jpg",
               "url": "http://magazilla.ru/jpg_zoom1/791478.jpg"
            },
            {
               "name": "f2o3r52fhm1_-1218646795.jpg",
               "url": "http://mzimg.com/big/m1/f2o3r52fhm1.jpg"
            },
            {
               "name": "f2o3rdmlgw1_-734479379.jpg",
               "url": "http://mzimg.com/big/w1/f2o3rdmlgw1.jpg"
            }
         ]
      },
      {
         "sku": "69634505",
         "name": "Роутер Huawei E8372",
         "category_id": "1030",
         "quantity": 3,
         "description": "Вес (г): 40; Габариты (мм): 94x30x14; Питание: от USB; слот для SIM-карты; разъем для карты памяти; разъем для внешней антенны; 3mob; Vodafone; lifecell; Киевстар; Йота; МегаФон; MTC; Билайн; LTE (до 173 Мбит/с); HSPA+ (70 Мбит/с); HSDPA (до 14.4 Мбит/с); HSUPA (до 5.7 Мбит/с); W-CDMA (до 2 Мбит/с)",
         "short_description": "",
         "manufacturer": "Huawei",
         "weight": "0",
         "height": "0",
         "width": "0",
         "depth": "0",
         "meta_title": "",
         "meta_keywords": "",
         "meta_description": "",
         "product_url": "http://magazilla.ru/desc/huawei-e8372/",
         "reviews_number": "",
         "rating": "",
         "price": "2659.8",
         "price_old": "0",
         "price_wholesale": "0",
         "features": [
            {
               "name": "Тип",
               "value": "переносная Wi-Fi точка"
            },
            {
               "name": "Поколение связи",
               "value": "2G, 3G, 4G (LTE)"
            },
            {
               "name": "Технология передачи",
               "value": "GPRS (до 80 Кбит/с), EDGE (до 240 Кбит/с), W-CDMA (до 2 Мбит/с), HSUPA (до 5.7 Мбит/с), HSDPA (до 14.4 Мбит/с), HSPA+ (70 Мбит/с), LTE (до 173 Мбит/с)"
            },
            {
               "name": "Оператор (провайдер)",
               "value": "Билайн, MTC, МегаФон, Йота, Киевстар, lifecell, Vodafone, 3mob"
            },
            {
               "name": "Функции/возможности",
               "value": "разъем для внешней антенны, разъем для карты памяти / microSD /, слот для SIM-карты"
            },
            {
               "name": "Скорость подключения Wi-Fi",
               "value": "до 11 Мбит/сек (802.11b), до 54 Мбит/сек (802.11g), до 300 Мбит/сек (802.11n)"
            },
            {
               "name": "Кол-во подключаемых устройств",
               "value": "10"
            },
            {
               "name": "Подключение и разъемы",
               "value": "USB / 2.0 /"
            },
            {
               "name": "Питание",
               "value": "от USB"
            },
            {
               "name": "Габариты",
               "value": "94x30x14 мм"
            },
            {
               "name": "Вес",
               "value": "40 г"
            }
         ],
         "images": [
            {
               "name": "634505_-1267480542.jpg",
               "url": "http://magazilla.ru/jpg_zoom1/634505.jpg"
            },
            {
               "name": "ev97sqbp5p1_-2076704943.jpg",
               "url": "http://mzimg.com/big/p1/ev97sqbp5p1.jpg"
            },
            {
               "name": "ev97svchgi1_1323723512.jpg",
               "url": "http://mzimg.com/big/i1/ev97svchgi1.jpg"
            },
            {
               "name": "ev97t0ske91_1198956607.jpg",
               "url": "http://mzimg.com/big/91/ev97t0ske91.jpg"
            },
            {
               "name": "ev97t68whm1_-1848422586.jpg",
               "url": "http://mzimg.com/big/m1/ev97t68whm1.jpg"
            },
            {
               "name": "ev97tb1srk1_1128370940.jpg",
               "url": "http://mzimg.com/big/k1/ev97tb1srk1.jpg"
            },
            {
               "name": "ev97ti3nts1_716387890.jpg",
               "url": "http://mzimg.com/big/s1/ev97ti3nts1.jpg"
            },
            {
               "name": "ev97txlsgw1_1511302722.jpg",
               "url": "http://mzimg.com/big/w1/ev97txlsgw1.jpg"
            },
            {
               "name": "ev97u2yjpu1_-2036039016.jpg",
               "url": "http://mzimg.com/big/u1/ev97u2yjpu1.jpg"
            },
            {
               "name": "ev97tqapqw1_727300399.jpg",
               "url": "http://mzimg.com/big/w1/ev97tqapqw1.jpg"
            }
         ]
      },
      {
         "sku": "69519673",
         "name": "Роутер Huawei E5776",
         "category_id": "1030",
         "quantity": 3,
         "description": "Вес (г): 150; Габариты (мм): 106.4x66x15.5; Питание: от аккумулятора; Время работы в режиме ожидания (ч): 500; Время работы в режиме интернет-серфинга (ч): 10; Ёмкость аккумулятора (мАч): 3000; дисплей; слот для SIM-карты; разъем для карты памяти; разъем для внешней антенны; 3mob; Vodafone;",
         "short_description": "",
         "manufacturer": "Huawei",
         "weight": "0",
         "height": "0",
         "width": "0",
         "depth": "0",
         "meta_title": "",
         "meta_keywords": "",
         "meta_description": "",
         "product_url": "http://magazilla.ru/desc/huawei-e5776/",
         "reviews_number": "",
         "rating": "",
         "price": "1254",
         "price_old": "0",
         "price_wholesale": "0",
         "features": [
            {
               "name": "Тип",
               "value": "переносная Wi-Fi точка"
            },
            {
               "name": "Поколение связи",
               "value": "2G, 3G, 4G (LTE)"
            },
            {
               "name": "Технология передачи",
               "value": "GPRS (до 80 Кбит/с), EDGE (до 240 Кбит/с), W-CDMA (до 2 Мбит/с), HSUPA (до 5.7 Мбит/с), HSDPA (до 14.4 Мбит/с), HSPA+ (70 Мбит/с), LTE (до 173 Мбит/с)"
            },
            {
               "name": "Оператор (провайдер)",
               "value": "Билайн, MTC, МегаФон, Йота, Киевстар, lifecell, Vodafone, 3mob"
            },
            {
               "name": "Функции/возможности",
               "value": "разъем для внешней антенны, разъем для карты памяти / microSD, до 32 ГБ /, слот для SIM-карты, дисплей"
            },
            {
               "name": "Скорость подключения Wi-Fi",
               "value": "до 11 Мбит/сек (802.11b), до 54 Мбит/сек (802.11g), до 300 Мбит/сек (802.11n)"
            },
            {
               "name": "Кол-во подключаемых устройств",
               "value": "10"
            },
            {
               "name": "Ёмкость аккумулятора",
               "value": "3000 мАч"
            },
            {
               "name": "Время работы в режиме интернет-серфинга",
               "value": "10 ч"
            },
            {
               "name": "Время работы в режиме ожидания",
               "value": "500 ч"
            },
            {
               "name": "Подключение и разъемы",
               "value": "USB / micro /, Wi-Fi"
            },
            {
               "name": "Питание",
               "value": "от аккумулятора"
            },
            {
               "name": "Габариты",
               "value": "106.4x66x15.5 мм"
            },
            {
               "name": "Вес",
               "value": "150 г"
            }
         ],
         "images": [
            {
               "name": "519673_1877022231.jpg",
               "url": "http://magazilla.ru/jpg_zoom1/519673.jpg"
            },
            {
               "name": "eoo94m49dx1_374410929.jpg",
               "url": "http://mzimg.com/big/x1/eoo94m49dx1.jpg"
            },
            {
               "name": "eoo9686mw71_-368371824.jpg",
               "url": "http://mzimg.com/big/71/eoo9686mw71.jpg"
            },
            {
               "name": "eoo96fn93y1_46459098.jpg",
               "url": "http://mzimg.com/big/y1/eoo96fn93y1.jpg"
            },
            {
               "name": "eoo96ljttr1_15860750.jpg",
               "url": "http://mzimg.com/big/r1/eoo96ljttr1.jpg"
            }
         ]
      },
      {
         "sku": "69519448",
         "name": "Роутер Huawei E8231",
         "category_id": "1030",
         "quantity": 7,
         "description": "Вес (г): 30; Габариты (мм): 88х27х11.5; Питание: от USB; слот для SIM-карты; 3mob; Vodafone; lifecell; Киевстар; МегаФон; MTC; Билайн; HSPA+ (70 Мбит/с); HSDPA (до 14.4 Мбит/с); HSUPA (до 5.7 Мбит/с); W-CDMA (до 2 Мбит/с); EDGE (до 240 Кбит/с); GPRS (до 80 Кбит/с); 3G; Поколение связи: 2G; Тип: переносная Wi-Fi точка",
         "short_description": "",
         "manufacturer": "Huawei",
         "weight": "0",
         "height": "0",
         "width": "0",
         "depth": "0",
         "meta_title": "",
         "meta_keywords": "",
         "meta_description": "",
         "product_url": "http://magazilla.ru/desc/huawei-e8231/",
         "reviews_number": "",
         "rating": "",
         "price": "1804",
         "price_old": "0",
         "price_wholesale": "0",
         "features": [
            {
               "name": "Тип",
               "value": "переносная Wi-Fi точка"
            },
            {
               "name": "Поколение связи",
               "value": "2G, 3G"
            },
            {
               "name": "Технология передачи",
               "value": "GPRS (до 80 Кбит/с), EDGE (до 240 Кбит/с), W-CDMA (до 2 Мбит/с), HSUPA (до 5.7 Мбит/с), HSDPA (до 14.4 Мбит/с), HSPA+ (70 Мбит/с)"
            },
            {
               "name": "Оператор (провайдер)",
               "value": "Билайн, MTC, МегаФон, Киевстар, lifecell, Vodafone, 3mob"
            },
            {
               "name": "Функции/возможности",
               "value": "слот для SIM-карты"
            },
            {
               "name": "Скорость подключения Wi-Fi",
               "value": "до 11 Мбит/сек (802.11b), до 54 Мбит/сек (802.11g), до 300 Мбит/сек (802.11n)"
            },
            {
               "name": "Кол-во подключаемых устройств",
               "value": "10"
            },
            {
               "name": "Подключение и разъемы",
               "value": "USB / v2.0 /, Wi-Fi"
            },
            {
               "name": "Питание",
               "value": "от USB"
            },
            {
               "name": "Габариты",
               "value": "88х27х11.5 мм"
            },
            {
               "name": "Вес",
               "value": "30 г"
            }
         ],
         "images": [
            {
               "name": "519448_-1354156836.jpg",
               "url": "http://magazilla.ru/jpg_zoom1/519448.jpg"
            },
            {
               "name": "eoo4e0k3ld1_-1267212689.jpg",
               "url": "http://mzimg.com/big/d1/eoo4e0k3ld1.jpg"
            },
            {
               "name": "eoo4efhsm51_-1617914416.jpg",
               "url": "http://mzimg.com/big/51/eoo4efhsm51.jpg"
            },
            {
               "name": "eoo4eloc7h1_474504881.jpg",
               "url": "http://mzimg.com/big/h1/eoo4eloc7h1.jpg"
            },
            {
               "name": "eoo4errkho1_-320594176.jpg",
               "url": "http://mzimg.com/big/o1/eoo4errkho1.jpg"
            },
            {
               "name": "eoo4eyqtzy1_-228996910.jpg",
               "url": "http://mzimg.com/big/y1/eoo4eyqtzy1.jpg"
            },
            {
               "name": "eoo4f8thp21_-1742129653.jpg",
               "url": "http://mzimg.com/big/21/eoo4f8thp21.jpg"
            },
            {
               "name": "eoo4e8pdel1_1296915520.jpg",
               "url": "http://mzimg.com/big/l1/eoo4e8pdel1.jpg"
            }
         ]
      },
      {
         "sku": "69952694",
         "name": "Роутер Huawei E5577",
         "category_id": "1030",
         "quantity": 13,
         "description": "Вес (г): 110; Габариты (мм): 96.8x58x17.3; Питание: от аккумулятора; Ёмкость аккумулятора (мАч): 1500; дисплей; слот для SIM-карты; разъем для карты памяти; разъем для внешней антенны; 3mob; Vodafone; lifecell; Киевстар; Йота; МегаФон; MTC; Билайн; LTE (до 173 Мбит/с); HSPA+ (70 Мбит/с); HSDPA (до 14.4 Мбит/с) ",
         "short_description": "",
         "manufacturer": "Huawei",
         "weight": "0",
         "height": "0",
         "width": "0",
         "depth": "0",
         "meta_title": "",
         "meta_keywords": "",
         "meta_description": "",
         "product_url": "http://magazilla.ru/desc/huawei-e5577/",
         "reviews_number": "",
         "rating": "",
         "price": "4620",
         "price_old": "0",
         "price_wholesale": "0",
         "features": [
            {
               "name": "Тип",
               "value": "переносная Wi-Fi точка"
            },
            {
               "name": "Поколение связи",
               "value": "2G, 3G, 4G (LTE)"
            },
            {
               "name": "Технология передачи",
               "value": "GPRS (до 80 Кбит/с), EDGE (до 240 Кбит/с), W-CDMA (до 2 Мбит/с), HSUPA (до 5.7 Мбит/с), HSDPA (до 14.4 Мбит/с), HSPA+ (70 Мбит/с), LTE (до 173 Мбит/с)"
            },
            {
               "name": "Оператор (провайдер)",
               "value": "Билайн, MTC, МегаФон, Йота, Киевстар, lifecell, Vodafone, 3mob"
            },
            {
               "name": "Функции/возможности",
               "value": "разъем для внешней антенны / 2 шт /, разъем для карты памяти, слот для SIM-карты, дисплей / 1.45 '' /"
            },
            {
               "name": "Скорость подключения Wi-Fi",
               "value": "до 11 Мбит/сек (802.11b), до 54 Мбит/сек (802.11g), до 300 Мбит/сек (802.11n)"
            },
            {
               "name": "Радиус действия",
               "value": "10 м"
            },
            {
               "name": "Кол-во подключаемых устройств",
               "value": "10"
            },
            {
               "name": "Ёмкость аккумулятора",
               "value": "1500 мАч"
            },
            {
               "name": "Подключение и разъемы",
               "value": "microUSB, Wi-Fi"
            },
            {
               "name": "Питание",
               "value": "от аккумулятора"
            },
            {
               "name": "Габариты",
               "value": "96.8x58x17.3 мм"
            },
            {
               "name": "Вес",
               "value": "110 г"
            }
         ],
         "images": [
            {
               "name": "952694_1245734318.jpg",
               "url": "http://magazilla.ru/jpg_zoom1/952694.jpg"
            },
            {
               "name": "f8zv64s10l1_53528379.jpeg",
               "url": "http://mzimg.com/big/l1/f8zv64s10l1.jpeg"
            },
            {
               "name": "f8zv6bc21f1_-1401133209.jpg",
               "url": "http://mzimg.com/big/f1/f8zv6bc21f1.jpg"
            },
            {
               "name": "f8zv6t4f8k1_191918109.jpg",
               "url": "http://mzimg.com/big/k1/f8zv6t4f8k1.jpg"
            }
         ]
      },
      {
         "sku": "69519551",
         "name": "Роутер ZTE MF823",
         "category_id": "1030",
         "quantity": 5,
         "description": "Вес (г): 45; Габариты (мм): 91x34x13; Питание: от USB; слот для SIM-карты; разъем для карты памяти; 3mob; Vodafone; lifecell; Киевстар; Йота; МегаФон; MTC; Билайн; LTE (до 173 Мбит/с); HSPA+ (70 Мбит/с); HSDPA (до 14.4 Мбит/с); HSUPA (до 5.7 Мбит/с); W-CDMA (до 2 Мбит/с); EDGE (до 240 Кбит/с); GPRS (до 80 Кбит/с)",
         "short_description": "",
         "manufacturer": "ZTE",
         "weight": "0",
         "height": "0",
         "width": "0",
         "depth": "0",
         "meta_title": "",
         "meta_keywords": "",
         "meta_description": "",
         "product_url": "http://magazilla.ru/desc/zte-mf823/",
         "reviews_number": "",
         "rating": "",
         "price": "2253.9",
         "price_old": "0",
         "price_wholesale": "0",
         "features": [
            {
               "name": "Тип",
               "value": "Роутер (к устройству)"
            },
            {
               "name": "Поколение связи",
               "value": "2G, 3G, 4G (LTE)"
            },
            {
               "name": "Технология передачи",
               "value": "GPRS (до 80 Кбит/с), EDGE (до 240 Кбит/с), W-CDMA (до 2 Мбит/с), HSUPA (до 5.7 Мбит/с), HSDPA (до 14.4 Мбит/с), HSPA+ (70 Мбит/с), LTE (до 173 Мбит/с)"
            },
            {
               "name": "Оператор (провайдер)",
               "value": "Билайн, MTC, МегаФон, Йота, Киевстар, lifecell, Vodafone, 3mob"
            },
            {
               "name": "Функции/возможности",
               "value": "разъем для карты памяти / microSD /, слот для SIM-карты"
            },
            {
               "name": "Подключение и разъемы",
               "value": "USB / v2.0 /"
            },
            {
               "name": "Питание",
               "value": "от USB"
            },
            {
               "name": "Габариты",
               "value": "91x34x13 мм"
            },
            {
               "name": "Вес",
               "value": "45 г"
            }
         ],
         "images": [
            {
               "name": "eoo6a7kpu31_1943399045.jpg",
               "url": "http://mzimg.com/big/31/eoo6a7kpu31.jpg"
            },
            {
               "name": "eoo6anp5nw1_-1927778421.jpg",
               "url": "http://mzimg.com/big/w1/eoo6anp5nw1.jpg"
            },
            {
               "name": "eoo6auhay31_1378687229.jpg",
               "url": "http://mzimg.com/big/31/eoo6auhay31.jpg"
            },
            {
               "name": "eoo6azqny41_283916083.jpg",
               "url": "http://mzimg.com/big/41/eoo6azqny41.jpg"
            }
         ]
      },
      {
         "sku": "691270019",
         "name": "Роутер ZTE MF93D",
         "category_id": "1030",
         "quantity": 7,
         "description": "Вес (г): 120; Габариты (мм): 107х61х16; Питание: от аккумулятора; Время работы в режиме интернет-серфинга (ч): 10; Ёмкость аккумулятора (мАч): 2800; дисплей; слот для SIM-карты; разъем для внешней антенны; 3mob; Vodafone; lifecell; Киевстар; Йота; МегаФон; MTC; Билайн; LTE (до 173 Мбит/с); HSPA+ (70 Мбит/с)",
         "short_description": "",
         "manufacturer": "ZTE",
         "weight": "0",
         "height": "0",
         "width": "0",
         "depth": "0",
         "meta_title": "",
         "meta_keywords": "",
         "meta_description": "",
         "product_url": "http://magazilla.ru/desc/zte-mf93d/",
         "reviews_number": "",
         "rating": "",
         "price": "1199",
         "price_old": "0",
         "price_wholesale": "0",
         "features": [
            {
               "name": "Тип",
               "value": "переносная Wi-Fi точка"
            },
            {
               "name": "Поколение связи",
               "value": "2G, 3G, 4G (LTE)"
            },
            {
               "name": "Технология передачи",
               "value": "GPRS (до 80 Кбит/с), EDGE (до 240 Кбит/с), W-CDMA (до 2 Мбит/с), HSUPA (до 5.7 Мбит/с), HSDPA (до 14.4 Мбит/с), HSPA+ (70 Мбит/с), LTE (до 173 Мбит/с)"
            },
            {
               "name": "Оператор (провайдер)",
               "value": "Билайн, MTC, МегаФон, Йота, Киевстар, lifecell, Vodafone, 3mob"
            },
            {
               "name": "Функции/возможности",
               "value": "разъем для внешней антенны / 2 шт /, слот для SIM-карты, дисплей"
            },
            {
               "name": "Скорость подключения Wi-Fi",
               "value": "до 11 Мбит/сек (802.11b), до 54 Мбит/сек (802.11g), до 300 Мбит/сек (802.11n)"
            },
            {
               "name": "Кол-во подключаемых устройств",
               "value": "8"
            },
            {
               "name": "Ёмкость аккумулятора",
               "value": "2800 мАч"
            },
            {
               "name": "Время работы в режиме интернет-серфинга",
               "value": "10 ч"
            },
            {
               "name": "Подключение и разъемы",
               "value": "Wi-Fi"
            },
            {
               "name": "Питание",
               "value": "от аккумулятора"
            },
            {
               "name": "Габариты",
               "value": "107х61х16 мм"
            },
            {
               "name": "Вес",
               "value": "120 г"
            }
         ],
         "images": [
            {
               "name": "1270019_265169315.jpg",
               "url": "http://magazilla.ru/jpg_zoom1/1270019.jpg"
            }
         ]
      }
   ],

}

const categoryReducer = (state = initState, action) => {

   const categories = state.categories
   const names = categories.categories.map(item => item.name)

   switch (action.type) {
      case ADD_CATEGORY: {
         const newCategory = {
            name: categories.newinfo,
            id: String(parseInt(categories.categories[categories.categories.length - 1].id) + 1),
            items: [],
         }
         console.log(newCategory);
         let copy
         if ((newCategory.name) && !(names.includes(newCategory.name))) {
            copy = {
               ...state,
               categories: {
                  ...state.categories,
                  newinfo: '',
                  categories: [...state.categories.categories, newCategory]
               }
            }
         } else if (names.includes(newCategory.name)) {
            copy = {
               ...state,
               categories: {
                  ...state.categories,
                  newinfo: ''
               }
            }
         }
         return copy ?? state
      }
      case UPDATE_CATEGORY: {
         return {
            ...state,
            categories: {
               ...state.categories,
               newinfo: action.valueName
            }
         }
      }
      default: {
         return state
      }
   }
}

export const addCategoryCreator = () => ({ type: ADD_CATEGORY })
export const updateCategoryCreator = (name) => ({ type: UPDATE_CATEGORY, valueName: name })

export default categoryReducer