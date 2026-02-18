import type { Service } from '../types'

const relatedTeethWhiteningRootCanalImplant = [
  {
    title: 'Teeth Whitening',
    slug: 'teeth-whitening',
    description: 'Teeth whitening lightens the color of your teeth, enhancing your smile. We can offer in office bleaching or home bleaching with individual trays.',
  },
  {
    title: 'Root Canal Treatment',
    slug: 'root-canals',
    description: 'Root canal treatment is typically needed when the tooth\'s innermost layer, containing nerves and blood vessels, becomes inflamed, infected, or damaged.',
  },
  {
    title: 'Implant Dentistry',
    slug: 'implant-dentistry',
    description: 'Dental implants can replace one or more missing teeth. It includes a post/screw which is surgically placed in the jaw first. After a couple of months of healing the implant screw can be assessed for a restorative part with a porcelain crown.',
  },
]

const relatedCrownsVeneersImplant = [
  {
    title: 'Crowns & Bridges',
    slug: 'crowns-bridges',
    description: 'Crowns are tooth-shaped caps that are placed over the existing tooth to restore its size, shape, and strength, and improve its appearance. They can be made of various materials like porcelain.',
  },
  {
    title: 'Veneers',
    slug: 'veneers',
    description: 'Veneers are a popular dental treatment that can help transform the appearance of your teeth. Thin, custom-made shells that are placed over the front surface of your teeth.',
  },
  {
    title: 'Implant Dentistry',
    slug: 'implant-dentistry',
    description: 'Implant dentistry is an important dental procedure that can help restore the function and appearance of your teeth. Dental implants are artificial tooth roots that are surgically placed.',
  },
]

export const services: Service[] = [
  {
    id: '1',
    slug: 'acc',
    title: 'ACC',
    description: 'We are an accredited ACC provider and can help you with any injuries related to dental accidents.',
    sections: [
      {
        content: [
          'ACC, or the Accident Compensation Corporation, is a New Zealand government agency that provides comprehensive, no-fault personal injury cover to all New Zealand residents and visitors. If you have suffered an injury as a result of an accident, you may be eligible for ACC coverage. At Elmwood Dental, we are an accredited ACC provider, which means that we can provide dental treatment to patients who have suffered dental injuries as a result of an accident. This includes injuries to the teeth, gums, and jaw, as well as facial injuries that affect the teeth and mouth.',
          'If you have suffered a dental injury as a result of an accident, you can contact Elmwood Dental to schedule an appointment with one of our experienced dentists. We will work with you to assess your dental needs and develop a treatment plan that is tailored to your individual needs.',
          'We will also work closely with ACC to ensure that your dental treatment is covered by your ACC claim. Our team will handle all of the paperwork and documentation required by ACC, so you can focus on your recovery and getting back to your daily life.',
        ],
      },
      {
        heading: 'Compassionate Care For Dental Injuries At Elmwood Dental',
        content: [
          'At Elmwood Dental, we understand that dental injuries can be painful and stressful. That\'s why we are committed to providing compassionate, high-quality dental care to all of our patients, including those who have suffered dental injuries as a result of an accident. If you have suffered a dental injury and need dental treatment, don\'t hesitate to contact Elmwood Dental to schedule an appointment with one of our experienced dentists. We are here to help you get the care you need to get back to your best.',
        ],
      },
      {
        heading: 'Scheduling An Appointment After Approval',
        content: [
          'Once your claim has been approved, you can contact Elmwood Dental to schedule an appointment with one of our experienced dentists. We will work with you to assess your dental needs and develop a treatment plan that is tailored to your individual needs.',
        ],
      },
    ],
    relatedServices: relatedCrownsVeneersImplant,
    images: [
      'https://elmwooddental.co.nz/wp-content/uploads/2023/03/BB18c.jpeg',
    ],
  },
  {
    id: '2',
    slug: 'teeth-whitening',
    title: 'Teeth Whitening',
    description: 'Teeth whitening lightens the color of your teeth, enhancing your smile. We can offer in office bleaching or home bleaching with individual trays.',
    sections: [
      {
        content: [
          'Teeth whitening lightens the color of your teeth, enhancing your smile. It\'s a popular cosmetic dental procedure. The reasons for teeth whitening may include improving self-confidence, removing stains, preparing for a special occasion or resulting in a more youthful appearance.',
        ],
        subsections: [
          {
            heading: 'Boosts Confidence & Improves Appearance',
            content: ['Whiter teeth can boost confidence and improve appearance, removing stains caused by aging, smoking, and diet. A brighter smile can make you feel more attractive and youthful, with a positive outlook on life.'],
          },
          {
            heading: 'Non-Invasive Procedure & Affordable',
            content: ['Teeth whitening is a safe and non-invasive way to improve your smile. It can be completed in just one appointment or over a few sessions, and is an affordable cosmetic procedure.'],
          },
        ],
      },
      {
        heading: 'Signs You Need Teeth Whitening',
        content: [
          'Here\'s How Yellow or discolored teeth are signs that you may benefit from teeth whitening. This includes teeth with yellow or brown stains, or teeth that are generally discolored. Additionally, as we age, our teeth naturally become darker and yellowed, and teeth whitening can help restore their brightness, giving a more youthful appearance. Certain lifestyle factors, such as smoking or consuming foods and drinks that stain teeth (like coffee, tea, and red wine), can contribute to tooth discoloration, and teeth whitening can remove these stains and restore the natural whiteness of your teeth. If you have a special occasion coming up, such as a wedding or job interview, teeth whitening may help you look your best.',
        ],
      },
      {
        heading: 'Teeth Whitening Options At Elmwood Dental Clinic',
        content: [
          'At Elmwood Dental, we offer a range of teeth whitening options to suit your needs and budget. We use the latest technologies and techniques to ensure that your teeth whitening treatment is as comfortable and effective as possible. We provide in office bleaching with Zoom LED Whitening, which is much safer than UV light bleaching. It normally takes around 45 minutes and could achieve up to 8 shades whiter teeth. We can also offer home bleaching systems, this will include custom made bleaching trays with either hydrogen-peroxide or carbamide peroxide gels. We will also provide our patients with the right products to deal with after-bleaching sensitivity.',
        ],
      },
      {
        heading: 'Schedule An Appointment For Teeth Whitening',
        content: [
          'If you are interested in teeth whitening, contact Elmwood Dental today to schedule an appointment with one of our experienced dentists. We are committed to providing high-quality, personalized dental care to all of our patients and helping them achieve the beautiful, healthy smile they deserve.',
        ],
      },
    ],
    relatedServices: [
      {
        title: 'Crowns & Bridges',
        slug: 'crowns-bridges',
        description: 'Crowns are tooth-shaped caps that are placed over the existing tooth to restore its size, shape, and strength, and improve its appearance. They can be made of various materials like porcelain.',
      },
      {
        title: 'Veneers',
        slug: 'veneers',
        description: 'Veneers are a popular dental treatment that can help transform the appearance of your teeth. Thin, custom-made shells that are placed over the front surface of your teeth.',
      },
      {
        title: 'Implant Dentistry',
        slug: 'implant-dentistry',
        description: 'Implant dentistry is an important dental procedure that can help restore the function and appearance of your teeth. Dental implants are artificial tooth roots that are surgically placed.',
      },
    ],
    images: [
      'https://elmwooddental.co.nz/wp-content/uploads/2023/03/BB18c.jpeg',
      'https://elmwooddental.co.nz/wp-content/uploads/2023/03/IMG_5639.jpeg',
      'https://elmwooddental.co.nz/wp-content/uploads/2023/03/IMG_5650.jpeg',
      'https://elmwooddental.co.nz/wp-content/uploads/2023/06/IMG_8499.jpg',
      'https://elmwooddental.co.nz/wp-content/uploads/2023/06/IMG_8500-rotated.jpg',
    ],
  },
  {
    id: '3',
    slug: 'root-canals',
    title: 'Root Canal Treatment',
    description: 'Root canal treatment is typically needed when the tooth\'s innermost layer, containing nerves and blood vessels, becomes inflamed, infected, or damaged.',
    sections: [
      {
        content: [
          'Root canal treatment is a dental procedure that is necessary when the pulp, which is the innermost layer of a tooth that contains nerves and blood vessels, becomes infected or inflamed. If left untreated, an infected or inflamed pulp can lead to severe pain, swelling, and even tooth loss.',
          'Elmwood Dental prioritizes preserving and restoring damaged or infected teeth through root canal treatment. Experienced dentists ensure comfort and effectiveness with advanced techniques and technologies.',
          'For comfortable and effective root canal treatments, Elmwood Dental uses the latest techniques and technologies. Experienced dentists prioritize preserving and restoring damaged or infected teeth.',
        ],
      },
      {
        heading: 'Reasons Why You May Need A Root Canal Treatment',
        content: [],
        subsections: [
          { heading: 'Deep decay', content: ['If tooth decay is left untreated, it can spread to the pulp of the tooth and cause an infection or inflammation.'] },
          { heading: 'Repeated dental procedures', content: ['If a tooth has had multiple fillings or other dental procedures, it can weaken over time and become more susceptible to infection.'] },
          { heading: 'Cracks or chips in the tooth', content: ['If a tooth has a crack or chip, it can expose the pulp to bacteria and other harmful substances, which can lead to infection.'] },
          { heading: 'Traumatic injury to the tooth', content: ['If a tooth has been injured or knocked out of place, it can damage the pulp and cause an infection.'] },
        ],
      },
      {
        heading: 'Expert Root Canal Treatment With Personalized Care',
        content: [
          'By choosing Elmwood Dental for your root canal treatment, you can rest assured that you are in good hands. Our team of experienced dentists will work with you to assess your dental needs and develop a personalized treatment plan that is tailored to your individual needs.',
          'We also understand that root canal treatments can be a daunting prospect for many patients, which is why we take the time to explain the procedure and answer any questions you may have. Our goal is to ensure that you feel comfortable and confident throughout your treatment.',
        ],
      },
      {
        heading: 'Get Expert Dental Care Today',
        content: [
          'If you are experiencing tooth pain or think you need a root canal treatment, contact Elmwood Dental today to schedule an appointment with one of our experienced dentists. We are committed to providing high-quality, personalized dental care to all of our patients and helping them achieve optimal oral health.',
        ],
      },
    ],
    relatedServices: relatedCrownsVeneersImplant,
    images: [
      'https://elmwooddental.co.nz/wp-content/uploads/2023/03/BB18c.jpeg',
      'https://elmwooddental.co.nz/wp-content/uploads/2023/06/Before.jpg',
      'https://elmwooddental.co.nz/wp-content/uploads/2023/06/After.jpg',
    ],
  },
  {
    id: '4',
    slug: 'winz',
    title: 'WINZ',
    description: 'Elmwood Dental has worked in partnership with WINZ to provide affordable dental care to individuals and families experiencing financial hardship.',
    sections: [
      {
        content: [
          'Elmwood Dental has worked in partnership with WINZ to provide affordable dental care to individuals and families who are experiencing financial hardship or are on a low income. This partnership helps to ensure that everyone has access to quality dental care, regardless of their financial situation. Here are a few of the key benefits and the importance of this partnership : Access to Affordable Dental Care, Improved Oral Health Outcomes, Reduced Pain and Discomfort, Increased Access to Employment and Education.',
          'Overall, the partnership between WINZ and Elmwood Dental is of great importance to individuals and families who are experiencing financial hardship or are on a low income',
          'This partnership promotes overall health by providing affordable dental care, improving oral health outcomes, reducing pain, increasing access to employment/education, and improving the lives of those who need it most.',
        ],
      },
      {
        heading: 'Partnership Benefits And Importance',
        content: [],
        subsections: [
          { heading: 'Access to Affordable Dental Care', content: ['The most significant benefit of the partnership between WINZ and Elmwood Dental is that it provides individuals and families with access to affordable dental care. For those who are struggling financially, dental care can often be a luxury that they cannot afford. By working together, WINZ and Elmwood Dental ensure that everyone has access to quality dental care, regardless of their financial situation.'] },
          { heading: 'Improved Oral Health Outcomes', content: ['Access to affordable dental care helps to improve oral health outcomes. Regular check-ups, cleanings, and treatment for dental issues can prevent more significant problems from developing and improve overall oral health. This, in turn, can lead to improved overall health outcomes, including reduced risk for heart disease, stroke, and other chronic conditions.'] },
          { heading: 'Reduced Pain and Discomfort', content: ['Dental problems can cause significant pain and discomfort, which can affect a person\'s ability to work, attend school, or carry out daily activities. Access to affordable dental care through WINZ and Elmwood Dental helps to alleviate pain and discomfort, which can improve overall quality of life.'] },
          { heading: 'Increased Access to Employment and Education', content: ['Good oral health is essential for employment and education opportunities. Dental problems can make it difficult to speak, eat, or smile, which can affect a person\'s confidence and ability to engage with others. By providing access to affordable dental care, WINZ and Elmwood Dental help individuals to improve their oral health, which can increase their access to employment and education opportunities.'] },
        ],
      },
      {
        heading: 'Steps In Applying For WINZ Support For Dental Care',
        content: [],
        subsections: [
          { heading: 'Determine Your Eligibility', content: ['To receive WINZ support for dental care, you must be a New Zealand resident or citizen, and you must meet certain income and asset thresholds. You can use the WINZ online eligibility calculator to see if you qualify.'] },
          { heading: 'Apply for Financial Assistance', content: ['Once you have determined that you are eligible, you can apply for financial assistance through WINZ. You will need to provide information about your income, assets, and expenses, as well as any dental treatment that you need.'] },
          { heading: 'Get a Quote from Elmwood Dental', content: ['To receive dental treatment through the partnership with Elmwood Dental, you will need to get a quote for the treatment that you need. You can contact Elmwood Dental directly to get a quote.'] },
          { heading: 'Submit Your Quote to WINZ', content: ['Once you have received a quote for your dental treatment, you will need to submit it to WINZ for approval. WINZ will review the quote and determine how much financial assistance you are eligible for.'] },
          { heading: 'Receive Dental Treatment', content: ['Once your financial assistance has been approved, you can schedule your dental treatment with Elmwood Dental.'] },
        ],
      },
      {
        heading: 'WINZ Dental Treatment Considerations',
        content: [
          'It is important to note that there may be a waiting period for dental treatment through WINZ and Elmwood Dental, so it is recommended that you apply as early as possible if you need dental care. Additionally, not all dental treatments are covered by WINZ, so you should check with WINZ or Elmwood Dental to see what services are available.',
        ],
      },
    ],
    relatedServices: relatedCrownsVeneersImplant,
    images: [
      'https://elmwooddental.co.nz/wp-content/uploads/2023/03/BB18c.jpeg',
    ],
  },
  {
    id: '5',
    slug: 'crowns-bridges',
    title: 'Crowns & Bridges',
    description: 'Crowns are tooth-shaped caps placed over existing teeth. Bridges replace one or more missing teeth.',
    sections: [
      {
        content: [
          'Crowns and bridges are dental restorations used to cover or replace damaged, missing, or weak teeth.',
          'Crowns are tooth-shaped caps that are placed over the existing tooth to restore its size, shape, and strength, and improve its appearance. They can be made of various materials like porcelain, ceramic, metal, or a combination of materials. The different types of crowns are:',
        ],
        subsections: [
          { heading: 'Ceramic crowns', content: ['These are made of porcelain and provide a natural tooth-like appearance, making them suitable for front teeth.'] },
          { heading: 'Porcelain-fused-to-metal crowns', content: ['These are a combination of porcelain and metal, making them strong and durable, making them ideal for back teeth.'] },
          { heading: 'Gold crowns', content: ['These are made of gold or gold alloys, making them strong, durable, and long-lasting.'] },
          { heading: 'All-resin crowns', content: ['These are made of composite resin, making them the most affordable type of crown.'] },
        ],
      },
      {
        heading: 'Types Of Dental Bridges',
        content: [
          'Bridges, on the other hand, are dental restorations used to replace one or more missing teeth. They consist of one or more artificial teeth called pontics, which are supported by dental crowns on either side of the gap. The different types of bridges are:',
        ],
        subsections: [
          { heading: 'Traditional bridges', content: ['These are the most common type of bridges and consist of a pontic supported by two dental crowns.'] },
          { heading: 'Cantilever bridges', content: ['These are used when there is only one supporting tooth on one side of the gap.'] },
          { heading: 'Maryland bridges', content: ['These are also called resin-bonded bridges and consist of a pontic that is attached to the adjacent teeth using metal or porcelain wings.'] },
        ],
      },
      {
        heading: 'Crowns And Bridges For Dental Restoration',
        content: [
          'Overall, crowns and bridges are popular dental restorations that can improve the function, appearance, and overall health of your teeth. A dentist can help determine which type of crown or bridge is best suited for your individual needs.',
        ],
      },
      {
        heading: "Elmwood Dental's Crown And Bridge Services",
        content: [
          'Elmwood Dental offers high-quality and comfortable dental services, including crown and bridge procedures. If you need a crown or bridge to restore the function and appearance of your smile, Elmwood Dental has you covered.',
        ],
      },
    ],
    relatedServices: relatedTeethWhiteningRootCanalImplant,
    images: [
      'https://elmwooddental.co.nz/wp-content/uploads/2023/03/BB18c.jpeg',
      'https://elmwooddental.co.nz/wp-content/uploads/2023/04/IMG_2471-1.jpg',
      'https://elmwooddental.co.nz/wp-content/uploads/2023/04/IMG_5226.jpg',
      'https://elmwooddental.co.nz/wp-content/uploads/2023/06/IMG_8516.jpg',
      'https://elmwooddental.co.nz/wp-content/uploads/2023/06/IMG_8518.jpg',
      'https://elmwooddental.co.nz/wp-content/uploads/2023/06/IMG_8520.jpg',
      'https://elmwooddental.co.nz/wp-content/uploads/2023/06/IMG_8521.jpg',
    ],
  },
  {
    id: '6',
    slug: 'botox-dysport',
    title: 'Botox & Dysport',
    description: 'Neuromodulator treatments to reduce fine lines, wrinkles, and treat TMJ disorders.',
    sections: [
      {
        content: [
          'Elmwood Dental offers Botox (Dysport) treatments as part of their cosmetic dental services. Both Botox and Dysport are neuromodulators that can be used to reduce the appearance of fine lines and wrinkles around the face, including the mouth and lips.',
          'Botox and Dysport treatments can be important in dentistry for a variety of reasons. One key reason is that they can be used to alleviate certain dental conditions, such as temporomandibular joint disorder (TMJ), a condition that can cause pain and discomfort in the jaw, face, and neck.',
          'In addition to treating TMJ, Botox or Dysport injections can also be used to reduce the appearance of fine lines and wrinkles around the mouth and jaw area, leading to an improved cosmetic appearance. This makes them a versatile treatment option for both functional and cosmetic purposes in dentistry.',
        ],
      },
      {
        heading: 'Aesthetic Uses Of Botox And Dysport In Dentistry',
        content: [
          'Botox and Dysport treatments can also be used to address certain aesthetic concerns in dentistry. For example, they can be used to reduce the appearance of fine lines and wrinkles around the mouth and lips, which can help to create a more youthful, refreshed appearance. This can be particularly beneficial for patients who are seeking a comprehensive approach to oral health and aesthetics.',
        ],
      },
      {
        heading: 'Versatility Of Botox And Dysport Treatments In Dentistry',
        content: [
          'In addition, Botox and Dysport treatments can be performed in conjunction with other dental procedures, such as tooth restorations or smile makeovers, to help patients achieve their desired results.',
        ],
      },
      {
        heading: 'Botox And Dysport Specialists',
        content: [
          'At Elmwood Dental, their team of dental professionals have received specialized training in administering Botox and Dysport treatments. They use the latest techniques and technology to ensure the treatment is safe, comfortable, and effective.',
        ],
      },
    ],
    images: [
      'https://elmwooddental.co.nz/wp-content/uploads/2023/03/BB18c.jpeg',
    ],
  },
  {
    id: '7',
    slug: 'dentures',
    title: 'Dentures',
    description: 'Dental prosthetics to replace missing teeth, including complete, partial, and implant-supported options.',
    sections: [
      {
        content: [
          'Dentures are dental prosthetics used to replace missing teeth and their surrounding tissues. They are typically made from acrylic or other materials and are designed to look and function like natural teeth. Dentures can be complete, replacing all the teeth in the upper or lower jaw, or partial, replacing only some missing teeth. There are several types of dentures available, and the type of denture used depends on the patient\'s needs and preferences. Here are some of the different kinds and types of dental dentures',
        ],
        subsections: [
          { heading: 'Complete Dentures', content: ['These are designed to replace all the teeth in a patient\'s mouth. They are typically used when a patient has lost all their teeth or when any remaining teeth need to be extracted. Complete dentures come in two forms: conventional and immediate dentures.', 'Conventional dentures are placed in the patient\'s mouth after the gum tissue has healed from any extractions, which usually takes several weeks. Immediate dentures, on the other hand, are placed immediately after the teeth are removed.'] },
        ],
      },
      {
        heading: 'Partial Dentures & Implant-Supported Dentures',
        content: [
          'Partial dentures are used when the patient has some natural teeth remaining in their mouth. They are designed to fill in the gaps left by missing teeth and prevent the remaining teeth from shifting. Partial dentures are attached to the remaining teeth using clasps or connectors.',
          'Implant-supported dentures are designed to be anchored in place by dental implants. The implants are surgically placed in the jawbone and act as artificial roots. The denture is then attached to the implants, providing a secure and stable fit.',
        ],
      },
      {
        heading: 'Overdentures & Immediate Dentures',
        content: [
          'Overdentures are similar to implant-supported dentures, but they are attached to natural teeth instead of dental implants. This type of denture can help preserve any remaining natural teeth while also providing support and stability to the denture.',
          'Immediate dentures are placed immediately after the teeth are extracted. These dentures are designed to be temporary and are used while the gum tissue heals. Once the gum tissue has healed, the patient will need to be fitted with a more permanent denture. This can be often achieved with a denture reline.',
        ],
      },
      {
        heading: 'Denture Options And Care At Elmwood Dental',
        content: [
          'If you are in need of dentures, Elmwood Dental is a great option to consider. Elmwood Dental offers a wide range of denture options to meet the unique needs of each patient.',
          'During your initial consultation, the dentist will perform a comprehensive examination of your mouth and will discuss your treatment options with you. Depending on your needs, the dentist may recommend partial dentures if you have some remaining healthy teeth or complete dentures if you have no remaining teeth.',
          'At Elmwood Dental, the dentists work closely with patients to ensure that their dentures fit comfortably and securely, and they provide guidance on proper care and maintenance of dentures to ensure they last as long as possible.',
        ],
      },
    ],
    images: [
      'https://elmwooddental.co.nz/wp-content/uploads/2023/03/BB18c.jpeg',
      'https://elmwooddental.co.nz/wp-content/uploads/2023/04/IMG_3107-1.jpg',
      'https://elmwooddental.co.nz/wp-content/uploads/2023/04/IMG_4565-1.jpg',
    ],
  },
  {
    id: '8',
    slug: 'cosmetic-restorative-dentistry',
    title: 'Cosmetic / Restorative Dentistry',
    description: 'Improve the look and function of teeth with cosmetic and restorative procedures.',
    sections: [
      {
        content: [
          'Cosmetic dentistry improves the look of teeth, gums, and bite, including procedures such as teeth whitening and orthodontics. Restorative dentistry repairs teeth and gums, including procedures such as fillings and dental implants.',
          'With cosmetic dentistry, patients can enhance the appearance of their teeth and bite with procedures like veneers and bonding. Restorative dentistry repairs teeth, gums, and bite using procedures like root canals and dentures.',
          'Cosmetic dentistry and restorative dentistry both aim to improve the functionality and appearance of a patient\'s teeth. Cosmetic dentistry focuses on aesthetics, while restorative dentistry prioritizes function with procedures like bridges and fillings.',
        ],
      },
      {
        heading: 'Understanding The Procedure Of Cosmetic And Restorative Dentistry',
        content: [
          'The cosmetic and restorative dentistry procedure varies depending on the treatment type being performed. Generally, it involves an initial consultation with a dentist, followed by a treatment plan tailored to the patient\'s needs and goals. The procedure itself can range from simple, non-invasive treatments such as teeth whitening to more complex surgeries such as dental implants.',
        ],
      },
      {
        heading: 'Some Advantages And Benefits Of Cosmetic And Restorative Dentistry',
        content: [],
        subsections: [
          { heading: 'Improved Appearance', content: ['One of the main advantages of cosmetic dentistry is that it can improve the appearance of your teeth and give you a more beautiful smile. Treatments such as veneers, teeth whitening, and dental implants can help to enhance your natural teeth or replace missing ones.'] },
          { heading: 'Increased Confidence', content: ['A beautiful smile can give you a boost of confidence and help you feel more comfortable in social situations.'] },
          { heading: 'Better Functionality', content: ['Restorative dentistry can help to improve the function of your teeth, making it easier to chew, speak, and perform other daily activities.'] },
          { heading: 'Improved Oral Health', content: ['Many cosmetic and restorative treatments can also improve your oral health by addressing issues such as decay, gum disease, or misaligned teeth.'] },
          { heading: 'Long-lasting Results', content: ['Many cosmetic and restorative treatments provide long-lasting results that can improve your quality of life for years to come.'] },
        ],
      },
      {
        heading: 'Cosmetic And Restorative Dentistry Services',
        content: [
          'Overall, cosmetic and restorative dentistry can help improve a patient\'s teeth\' appearance, function, and health, leading to a better quality of life and increased confidence. At Elmwood Dental, we offer a range of cosmetic and restorative dentistry services to help our patients achieve their desired results.',
        ],
      },
    ],
    relatedServices: relatedTeethWhiteningRootCanalImplant,
    images: [
      'https://elmwooddental.co.nz/wp-content/uploads/2023/03/BB18c.jpeg',
      'https://elmwooddental.co.nz/wp-content/uploads/2023/04/IMG_0759-1.jpg',
      'https://elmwooddental.co.nz/wp-content/uploads/2023/04/IMG_0770.jpg',
      'https://elmwooddental.co.nz/wp-content/uploads/2023/06/before-and-after-dental-repair-scaled-1.jpeg',
      'https://elmwooddental.co.nz/wp-content/uploads/2023/06/before-and-after-dental-scaled-1.jpeg',
      'https://elmwooddental.co.nz/wp-content/uploads/2023/06/before-and-after-Untitled.jpg',
    ],
  },
  {
    id: '9',
    slug: 'veneers',
    title: 'Veneers',
    description: 'Thin, custom-made shells placed over the front surface of your teeth to improve their appearance.',
    sections: [
      {
        content: [
          'Veneers are a popular dental treatment that can help transform the appearance of your teeth. They are thin, custom-made shells that are placed over the front surface of your teeth to improve their shape, size, and color. Here are some reasons why people are obsessed with veneers',
        ],
        subsections: [
          { heading: 'Improved Appearance', content: ['Veneers can improve the appearance of your teeth by hiding imperfections such as chips, cracks, stains, and gaps.'] },
          { heading: 'Durability', content: ['Veneers are durable and long-lasting, and can provide a beautiful, natural-looking smile for many years with proper care.'] },
          { heading: 'Minimally Invasive', content: ['Veneers are a minimally invasive treatment that requires only a small amount of enamel to be removed from the tooth surface before they are placed.'] },
          { heading: 'Versatile', content: ['Veneers can be customized to match the size, shape, and color of your natural teeth, making them a versatile treatment option.'] },
        ],
      },
      {
        heading: 'Expert Dental Care For You',
        content: [
          'At Elmwood Dental, we believe in providing the best possible care to our patients. Our experienced dentists use the latest techniques and technologies to ensure that our patients receive safe, effective, and comfortable treatment. We also prioritize patient education and communication to ensure that our patients are fully informed and involved in their treatment decisions. Whether you are interested in veneers or other cosmetic dentistry options, we are here to help.',
        ],
      },
      {
        heading: 'Some Situations Where Veneers May Be A Good Option',
        content: [],
        subsections: [
          { heading: 'Discolored Teeth', content: ['If you have discolored teeth that are resistant to other forms of treatment such as teeth whitening, veneers may be a good option to improve the appearance of your smile.'] },
          { heading: 'Chipped or Cracked Teeth', content: ['Veneers can be used to hide chips or cracks in your teeth and restore their natural appearance.'] },
          { heading: 'Gaps Between Teeth', content: ['Veneers can be used to close small gaps between your teeth and improve your smile.'] },
        ],
      },
      {
        heading: 'Schedule A Consultation With Our Expert Dentists',
        content: [
          'Elmwood Dental offers comprehensive dental care with a focus on patient comfort and education. Contact us today to schedule a consultation with one of our experienced dentists, who will work with you to create a personalized treatment plan tailored to your needs and goals. From routine cleanings to cosmetic dentistry procedures such as veneers and teeth whitening, we are here to provide you with the best possible care.',
        ],
      },
    ],
    relatedServices: relatedTeethWhiteningRootCanalImplant,
    images: [
      'https://elmwooddental.co.nz/wp-content/uploads/2023/03/BB18c.jpeg',
    ],
  },
  {
    id: '10',
    slug: 'dental-exam-health-maintenance',
    title: 'Dental Exam, Health & Maintenance',
    description: 'Comprehensive dental exams and maintenance services for healthy teeth and gums.',
    sections: [
      {
        content: [
          'Regular dental exams and maintenance are essential for good oral health. At Elmwood Dental, we offer comprehensive dental exams and maintenance services to help our patients maintain healthy teeth and gums.',
          'During a dental exam, our experienced dentists will carefully examine your teeth, gums, and other oral tissues for signs of decay, gum disease, and other dental issues. We may also take X-rays to detect hidden problems.',
          'Based on the results of your exam, we will develop a personalized treatment plan to address any dental issues that we find. Our dentists will work with you to tailor the plan to your needs and goals, ensuring you receive the best possible care.',
        ],
      },
      {
        heading: 'Importance Of Regular Dental Maintenance',
        content: [
          'Regular dental maintenance is also important for maintaining optimal oral health. This may include professional teeth cleanings, fluoride treatments, and other preventive services to help prevent tooth decay and gum disease. We may also recommend other services, such as sealants or dental fillings, to help protect your teeth from further damage.',
        ],
      },
      {
        heading: 'Comprehensive Dental Care For Optimal Oral Health',
        content: [
          'At Elmwood Dental, we aim to help our patients achieve and maintain optimal oral health throughout their lives. We believe that prevention is key, and we work closely with our patients to develop individualized treatment plans that meet their unique needs and goals. Whether you are due for a routine dental exam or have specific dental concerns that need to be addressed, our team is here to help.',
        ],
      },
      {
        heading: 'Schedule An Appointment With Our Dentists',
        content: [
          'Contact Elmwood Dental today to schedule an appointment with one of our experienced dentists. Our team is dedicated to providing comprehensive dental care that is tailored to your individual needs and goals. From routine exams and cleanings to restorative and cosmetic dentistry, we are here to help you achieve optimal oral health.',
        ],
      },
    ],
    relatedServices: relatedTeethWhiteningRootCanalImplant,
    images: [
      'https://elmwooddental.co.nz/wp-content/uploads/2023/03/BB18c.jpeg',
    ],
  },
  {
    id: '11',
    slug: 'implant-dentistry',
    title: 'Implant Dentistry',
    description: 'Dental implants are artificial tooth roots surgically placed into the jawbone for replacement teeth.',
    sections: [
      {
        content: [
          'Implant dentistry is an important dental procedure that can help restore the function and appearance of your teeth. Dental implants are artificial tooth roots that are surgically placed into the jawbone, where they fuse with the bone and provide a stable base for replacement teeth.',
          'With implant dentistry, dental implants are placed into the jawbone to provide a stable base for replacement teeth. This procedure can help restore the function and appearance of teeth for a natural-looking smile.',
          'Implant dentistry is an essential procedure for those looking to restore the function and appearance of their teeth. Dental implants serve as artificial tooth roots, providing a stable base for replacement teeth that look and feel natural.',
        ],
      },
      {
        heading: 'Implant Dentistry For Optimal Oral Health',
        content: [
          'At Elmwood Dental, we offer comfortable and affordable implant dentistry services to help our patients achieve optimal oral health and function. Our experienced dentists use the latest techniques and technologies to ensure a safe, comfortable, and successful implant procedure. If you are interested in learning more about implant dentistry or think you may be a candidate for dental implants, contact us today to schedule a consultation with one of our experienced dentists.',
        ],
      },
      {
        heading: 'Some Reasons Why You May Need Implant Dentistry',
        content: [],
        subsections: [
          { heading: 'Missing Teeth', content: ['If you are missing one or more teeth, implant dentistry can provide a permanent, natural-looking solution. Dental implants can be used to replace a single tooth or multiple teeth, and can be customized to match the shape and color of your existing teeth.'] },
          { heading: 'Improving Function', content: ['Implants can help restore normal chewing and speaking function, which can be compromised by missing teeth or other dental issues.'] },
          { heading: 'Preserving Bone Density', content: ['When a tooth is lost, the bone that supported it can begin to deteriorate over time. Implants can help prevent bone loss by providing a stable base for replacement teeth.'] },
          { heading: 'Improving Confidence', content: ['Dental implants can improve your self-esteem and confidence by restoring a natural-looking smile and improving your overall oral health.'] },
        ],
      },
      {
        heading: 'Ideal Timing For Implant Placement',
        content: [
          'The best time to consider implant dentistry is typically as soon as possible after a tooth has been lost or extracted. The longer you wait to replace a missing tooth, the more likely it is that the bone will begin to deteriorate, making implant placement more difficult.',
        ],
      },
    ],
    relatedServices: relatedTeethWhiteningRootCanalImplant,
    images: [
      'https://elmwooddental.co.nz/wp-content/uploads/2023/03/BB18c.jpeg',
      'https://elmwooddental.co.nz/wp-content/uploads/2023/04/IMG_2471-1.jpg',
      'https://elmwooddental.co.nz/wp-content/uploads/2023/04/IMG_5226.jpg',
    ],
  },
  {
    id: '12',
    slug: 'tooth-extraction',
    title: 'Tooth Extraction',
    description: 'Safe tooth extraction for severely damaged or impacted teeth.',
    sections: [
      {
        content: [
          'Tooth extraction is a dental procedure that is typically reserved for cases where a tooth is damaged or cannot be saved through other dental treatments. Here are some common reasons why you may need a tooth extraction',
        ],
        subsections: [
          { heading: 'Severe Tooth Decay', content: ['If tooth decay has damaged the tooth beyond repair, extraction may be necessary to prevent further damage or infection.'] },
          { heading: 'Gum Disease', content: ['Advanced gum disease can cause teeth to become loose and eventually fall out. In some cases, extraction may be necessary to remove a damaged or infected tooth.'] },
          { heading: 'Overcrowding', content: ['If your mouth is overcrowded and there isn\'t enough room for all your teeth, extraction may be necessary to make room for proper alignment.'] },
          { heading: 'Impacted Teeth', content: ['If a tooth is unable to emerge fully from the gum line, it is considered impacted. Impacted teeth can cause pain, swelling, and infection, and may need to be extracted.'] },
        ],
      },
      {
        heading: 'Determining The Right Timing For Tooth Extraction',
        content: [
          'The best time to have a tooth extraction depends on the reason for the extraction. If a tooth is causing significant pain or discomfort, extraction may be necessary right away to alleviate symptoms and prevent further damage. In other cases, such as overcrowding or impacted teeth, extraction may be recommended as part of a long-term treatment plan.',
        ],
      },
      {
        heading: 'Get Expert Dental Care Today',
        content: [
          'If you are experiencing tooth pain or think you may need a tooth extraction, contact Elmwood Dental today to schedule an appointment with one of our experienced dentists. We are committed to providing high-quality, personalized dental care to all of our patients and helping them achieve optimal oral health.',
        ],
      },
    ],
    relatedServices: relatedCrownsVeneersImplant,
    images: [
      'https://elmwooddental.co.nz/wp-content/uploads/2023/03/BB18c.jpeg',
    ],
  },
  {
    id: '13',
    slug: 'conscious-intravenous-sedation',
    title: 'Conscious Intravenous Sedation',
    description: 'IV sedation to ease dental anxiety, administered by experienced practitioners.',
    sections: [
      {
        heading: 'What is Intravenous conscious sedation?',
        content: [
          'Kristine has been offering this service for almost 10 years now. It is a great way to ease your dental anxiety.',
          'A medicine Midazolam is used to help you relax and reduce your anxiety about dental treatment. The medication Midazolam is given through a plastic cannula into a vein in your arm.',
          'You may fall asleep during your procedure and you may not remember much. As you relax, your breathing may slow and your blood pressure may reduce a small amount.',
          'We will monitor your breathing, blood pressure, pulse rate and oxygen/carbon dioxide levels closely with our patient monitoring machine to ensure you are ok.',
          'We use extra oxygen for you to breathe through the nose.',
          'We also use our normal local anaesthetic into the gums so you feel no pain during your procedure.',
        ],
      },
      {
        heading: 'Who is Intravenous sedation ideal for in our practice?',
        content: [],
        listItems: [
          'Patients who suffer from dental anxiety',
          'Fit and healthy adults or those with mild well controlled medical conditions',
          'Some children over the age of 12',
        ],
      },
      {
        heading: 'Who is not an ideal candidate for sedation at our practice?',
        content: [],
        listItems: [
          'A history of sleep apnoea or severe snoring',
          'Someone who is suffering breathing difficulties or symptoms of a cold or flu',
          'Some medications interact with Midazolam - therefore it is very important to inform your dentists of any medications (including recreational drugs) that you are taking and any allergic reactions you may have',
          'Alcohol can also interact with Midazolam',
          'Significant medical conditions eg: liver or kidney disease',
          'Pregnancy or Breastfeeding',
          'Hypersensitivity to Benzodiazepine drugs',
        ],
      },
      {
        heading: 'What are the risks?',
        content: [
          'Midazolam can affect your breathing if you are given too much, that is why we pay close attention to giving you a small amount of the drug for optimal effect.',
          'We also have a reversal drug Flumazenil in the room which we can give you. This is very rarely used. This will reverse the effects of the sedation.',
        ],
        listItems: [
          'Drowsiness and confusion are common',
          'Problems with movement and memory',
          'Increased risk of falls or injury',
          'Impaired attention or judgement or inappropriate behaviour can occur',
        ],
      },
      {
        heading: 'On the day of the procedure',
        content: [],
        listItems: [
          'Organise for someone to pick you up after the procedure and who will stay with you for the rest of the day',
          "Don't eat for 4 hours before procedure. Do drink lots of water and stop drinking 2 hours before your procedure",
          "Don't drink alcohol",
          'Wear baggy loose-fitting clothes and keep your arms warm (it helps us find a vein)',
          'No dark coloured nail polish',
          'DO take your normal medications and ADVISE us of these',
        ],
      },
      {
        heading: 'After the procedure for 24 hours',
        content: [],
        listItems: [
          'No driving - have someone pick you up and stay with you for 8 hours',
          'No looking after children',
          "Don't operate any heavy machinery",
          "Don't sign any legal documentation",
          "Don't participate in strenuous exercise or activity",
          "Don't drink alcohol or take any other sedative medications",
        ],
      },
    ],
    relatedServices: relatedTeethWhiteningRootCanalImplant,
    images: [
      'https://elmwooddental.co.nz/wp-content/uploads/2023/03/BB18c.jpeg',
      'https://elmwooddental.co.nz/wp-content/uploads/2025/03/Screenshot-2025-03-07-at-10.26.44-AM.png',
      'https://elmwooddental.co.nz/wp-content/uploads/2025/03/Screenshot-2025-03-07-at-10.28.54-AM.png',
    ],
  },
  {
    id: '14',
    slug: 'wisdom-teeth-removal',
    title: 'Wisdom Teeth Removal',
    description: 'Expert wisdom teeth removal with optional IV sedation for comfort.',
    sections: [
      {
        content: [
          'Kristine has been removing wisdom teeth for almost 10 years now and really enjoys it. The surgery often involves intravenous conscious sedation to make the experience more comfortable.',
          'There is often little room for wisdom teeth in our mouth as the size of our jaws have evolved over time. This lack of space can cause the wisdom teeth to impact (or get stuck in their eruption) and become inflamed or damage the adjacent teeth.',
          'Sometimes we can get a significant infection around the gum due to plaque and bacteria accumulation around the partially erupted wisdom tooth, if untreated these infections can be dangerous.',
          'Other symptoms of wisdom teeth problems can include ear ache, a bad taste, aching in the jaw, facial swelling, swollen lymph glands, sore throat and difficulty opening the mouth.',
          'Removing wisdom teeth does carry some risks and Kristine will be sure to go through these with you at your consultation appointment. The best age to get your wisdom teeth removed is 18-25 years.',
          'The wisdom teeth are often taken out in two or more pieces after an incision is made into the gum. There will be stitches to help with healing which dissolve on their own in 2-3 weeks.',
          'Recovery time varies depending on the degree of difficulty of the procedure. It is common to have swelling and bruising in the days that follow the procedure. Most patients take a few days off their daily activities to recover and rest.',
        ],
      },
    ],
    relatedServices: relatedTeethWhiteningRootCanalImplant,
    images: [
      'https://elmwooddental.co.nz/wp-content/uploads/2023/03/BB18c.jpeg',
      'https://elmwooddental.co.nz/wp-content/uploads/2025/03/Screenshot-2025-03-07-at-10.45.37-AM.png',
      'https://elmwooddental.co.nz/wp-content/uploads/2025/03/Screenshot-2025-03-07-at-10.48.09-AM.png',
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug)
}
