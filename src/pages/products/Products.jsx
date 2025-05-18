const products = [
  {
    id: 1,
    name: 'SOLIS SPF 30 Sunscreen',
    href: 'https://www.shoppersdrugmart.ca/idc-solis-fps-30-spf/p/BB_872292004338?variantCode=872292004338&source=nspt',
    imageSrc: 'https://digital.loblaws.ca/SDM/SDM_872292004338/en/1/872292004338_enfr_01_v1_800.jpeg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$44.99',
    color: 'Shoppers',
  },
  {
    id: 1,
    name: 'Exfoliating Salicylic Acid Face Cleanser',
    href: 'https://www.shoppersdrugmart.ca/cerave-exfoliating-salicylic-acid-face-cleanser/p/BB_3606000569270?variantCode=3606000569270&source=nspt',
    imageSrc: 'https://digital.loblaws.ca/SDM/SDM_3606000569270/en/1/3606000569270_enfr_01_800.jpeg',
    imageAlt: "CeraVe",
    price: '$24.99',
    color: 'Shoppers',
  },
  {
    id: 1,
    name: 'Moisturizing Cream For Normal to Dry Skin',
    href: 'https://www.shoppersdrugmart.ca/cerave-moisturizing-cream-for-normal-to-dry-skin/p/BB_3606000531673?variantCode=3606000531673&source=nspt',
    imageSrc: 'https://digital.loblaws.ca/SDM/SDM_3606000531673/en/1/3606000531673_enfr_01_v1_800.jpeg',
    imageAlt: "CeraVe",
    price: '$31.99',
    color: 'Shoppers',
  },
  {
    id: 1,
    name: 'Paula\'s Choice: Skin Perfecting 2% BHA Exfoliating Toner for Clear Skin',
    href: 'https://www.sephora.com/ca/en/product/paulas-choice-skin-perfecting-2-bha-liquid-exfoliant-P511700?country_switch=ca&skuId=2767663&om_mmc=ppc-GG_2024543160_70610901974_pla-420315098113_2767663_354815103824_9000765_c&gad_source=1&gad_campaignid=2024543160&gbraid=0AAAAADnIXb3b9ROtUsTS39UA3SuKrHE5N&gclid=Cj0KCQjwiqbBBhCAARIsAJSfZkYfb3bV9gqEc1MP_OCt8OCyI4rpsznwPVX-iJWj51BQ3YUQ8W19V_YaAjHDEALw_wcB&gclsrc=aw.ds',
    imageSrc: 'https://www.sephora.com/productimages/sku/s2767663-main-zoom.jpg?imwidth=612',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$52.00',
    color: 'Sephora',
  },
  // More products...
]

export default function Routine() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight custom-fontColor2">Products I use in my routine!</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80 drop-shadow-lg"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
