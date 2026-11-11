import type { DocumentLink, TransparencyYear } from '@/types'

/** PDFs still hosted on the old Wix site. TODO: re-host and update this base URL only. */
const DOCUMENTS_BASE_URL = 'https://www.agapemissoesurbanas.org/_files/ugd/'

function doc(title: string, fileName: string): DocumentLink {
  return { title, url: `${DOCUMENTS_BASE_URL}${fileName}` }
}

/** Institutional documents shared by every partnership. */
const institutionalDocuments = {
  estatuto: doc('Estatuto social', 'd94354_2177297c929b4e2fa255bf3b799e4749.pdf'),
  regimento: doc('Regimento interno', 'd94354_b50778a65c514fc2996b28f0306be16b.pdf'),
  remuneracao: doc('Remuneração dos dirigentes', 'd94354_2c9608b62c95428eb381eff6078dfc19.pdf'),
  contratacao: doc('Regulamento de contratação de pessoal', 'd94354_30948ca7e72d48438b4fd2b275d0d898.pdf'),
  compras: doc('Regulamento de compras e aquisições', 'd94354_5bbff1e7ebf849aea5494d83983d463a.pdf'),
  alvara: doc('Alvará de funcionamento', 'd94354_c59db88e0615402fa59875b1b98cb90a.pdf'),
  cartaoCnpj: doc('Cartão CNPJ', 'd94354_ba57075647aa4637af42a6688d6cd964.pdf'),
  bombeiros901: doc('Licença do Corpo de Bombeiros — nº 901', 'd94354_26114190cbaf48fca0a1f76e9663b6a5.pdf'),
  bombeiros907: doc('Licença do Corpo de Bombeiros — nº 907', 'd94354_fe53171add874e6ba8a5480c8af262c3.pdf'),
}

export const transparencyYears: TransparencyYear[] = [
  {
    year: 2026,
    reports: [
      {
        programId: 'scfv',
        instrument: 'Termo de Fomento nº 001/2026 + Termo Aditivo (R$ 49.287,89)',
        amount: 385755.64,
        groups: [
          {
            title: 'Documentos da parceria',
            documents: [
              doc('Termo de Fomento 001/2026', 'd94354_ecc7ff8b0f1d4483becb2d1e12b8cc71.pdf'),
              doc('Plano de trabalho', 'd94354_07335260ed2a48dc91a19f294e2ab339.pdf'),
              doc('Termo aditivo ao Fomento 001/2026', 'd94354_908c691f759a4e4f8614c180deb24eb3.pdf'),
              doc('Plano aditivo', 'd94354_597b33d2d0584fc99ad3f895364c4840.pdf'),
              doc('Balanço financeiro 2025', 'd94354_2798d6b0287e41518d5d7f3923f2f743.pdf'),
            ],
          },
          {
            title: 'Documentos institucionais',
            documents: [
              institutionalDocuments.estatuto,
              doc('Relação nominal e diretoria atual', 'd94354_79bc108c579b4b6fa43b9e5971591f2c.pdf'),
              doc('Fluxograma da diretoria', 'd94354_432131bc87ee4511a2924b222001aef0.pdf'),
              institutionalDocuments.regimento,
              institutionalDocuments.remuneracao,
              institutionalDocuments.compras,
              institutionalDocuments.contratacao,
              institutionalDocuments.alvara,
              doc('CNPJ', 'd94354_8c160ba9672d4868b70d8e357182478d.pdf'),
              institutionalDocuments.bombeiros901,
              institutionalDocuments.bombeiros907,
            ],
          },
          {
            title: 'Contas pagas mensais',
            documents: [
              doc('Repasse mensal e acumulado', 'd94354_1422c13507e449c1bf808204c6588fec.pdf'),
              doc('Contas pagas — janeiro', 'd94354_25feb001c71f4cf2b731c5b1b9a175f9.pdf'),
              doc('Contas pagas — fevereiro', 'd94354_68c6332bfd6b41159675420bd8cf8cec.pdf'),
              doc('Contas pagas — março', 'd94354_c849c407e85e4fb28355440daaf7b8c8.pdf'),
              doc('Contas pagas — abril', 'd94354_a51921e7bb8142f19876c7e01357f9bc.pdf'),
              doc('Contas pagas — maio', 'd94354_3ee7b6f9ad784fefaba5a5cccf9ed242.pdf'),
              doc('Contas pagas — junho', 'd94354_4f47b58b4888486bb8b5ed3a80e1d77e.pdf'),
              doc('Contas pagas — julho', 'd94354_eb6fe37ba7064c4da61ba5bc03f549c1.pdf'),
              doc('Contas pagas — agosto', 'd94354_a9473eaaa29343ab823839982058cf3f.pdf'),
            ],
          },
          {
            title: 'Extratos e aplicações',
            documents: [
              doc('Extratos e aplicações — janeiro', 'd94354_3ae90a650e514b269309c7668b21a3b2.pdf'),
              doc('Extratos e aplicações — fevereiro', 'd94354_005cf3dcdb72462ab78321e5d7cf7375.pdf'),
              doc('Extratos e aplicações — março', 'd94354_ec78b3b63f0a4e74903f7700e764788b.pdf'),
              doc('Extratos e aplicações — abril', 'd94354_dbe4ba8f302b4cb88523966ddc23939a.pdf'),
              doc('Extratos e aplicações — maio', 'd94354_6c6f3e32efa04491931085d451d3a0ae.pdf'),
              doc('Extratos e aplicações — junho', 'd94354_f524a1eca44d452287c081ed63d53e5d.pdf'),
              doc('Extratos e aplicações — julho', 'd94354_89bbec646e6a4c1cbce0d89f1f29d333.pdf'),
              doc('Extratos e aplicações — agosto', 'd94354_ec4b6aab3ccd4cd1afcecd2e9f366188.pdf'),
            ],
          },
          {
            title: 'Prestação de contas quadrimestral',
            documents: [
              doc('1º quadrimestre', 'd94354_09e2f82d4109488f96f2d23e3736f5ec.pdf'),
              doc('2º quadrimestre', 'd94354_d46020dc05c549d68088bd0e3f890f82.pdf'),
            ],
          },
        ],
      },
      {
        programId: 'saber-mais',
        instrument: 'Termo de Fomento nº 014/2026 — FMDCA',
        amount: 120000,
        groups: [
          {
            title: 'Documentos da parceria',
            documents: [
              doc('Termo de Fomento 014/2026', 'd94354_6866f7356d354e528606130e8f2b81bb.pdf'),
              doc('Plano de trabalho', 'd94354_df8f11b18ec34d58920adfb9eec5a2c7.pdf'),
            ],
          },
          {
            title: 'Documentos institucionais',
            documents: [
              institutionalDocuments.estatuto,
              doc('Relação nominal e diretoria atual', 'd94354_79bc108c579b4b6fa43b9e5971591f2c.pdf'),
              institutionalDocuments.regimento,
              institutionalDocuments.remuneracao,
              institutionalDocuments.compras,
              institutionalDocuments.contratacao,
              institutionalDocuments.alvara,
              institutionalDocuments.cartaoCnpj,
              institutionalDocuments.bombeiros901,
              institutionalDocuments.bombeiros907,
            ],
          },
          {
            title: 'Contas pagas mensais',
            documents: [
              doc('Repasse mensal e acumulado', 'd94354_b42f56e9489949bfa63ed1bf83694260.pdf'),
              doc('Extrato de entrada', 'd94354_17e1270e425f49daa071c6878e26616d.pdf'),
              doc('Contas pagas — junho', 'd94354_e222955ea19f4ae2a92bd5b55c8b6cde.pdf'),
              doc('Contas pagas — julho', 'd94354_74d65fe282b241c8b82a987bc12183a7.pdf'),
              doc('Contas pagas — agosto', 'd94354_84ada56bf47c4ed8875c59ff67f97247.pdf'),
              doc('Contas pagas — setembro', 'd94354_7613233d3ed04f50a7c60e39bb1d0b90.pdf'),
            ],
          },
          {
            title: 'Extratos e aplicações',
            documents: [
              doc('Extratos e aplicações — junho', 'd94354_a8f6f82b91f347fbbf749918c48c595f.pdf'),
              doc('Extratos e aplicações — julho', 'd94354_752e2c04d4ce4043b8ba90a853a764dc.pdf'),
              doc('Extratos e aplicações — agosto', 'd94354_8628118d697e4214a044025bb06078c2.pdf'),
            ],
          },
        ],
      },
      {
        programId: 'construindo-futuro',
        instrument: 'Termo de Compromisso — Instituto João e Belinha Ometto',
        groups: [
          {
            title: 'Documentos institucionais',
            documents: [
              institutionalDocuments.estatuto,
              doc('Diretoria atual', 'd94354_f1cdd7ff199d4bd883520ed875224462.pdf'),
              doc('Relação nominal dos dirigentes', 'd94354_a0b6347709ec4d61a9280bed2a204a13.pdf'),
              institutionalDocuments.regimento,
              institutionalDocuments.remuneracao,
              institutionalDocuments.contratacao,
              institutionalDocuments.compras,
              institutionalDocuments.cartaoCnpj,
              institutionalDocuments.bombeiros901,
              institutionalDocuments.bombeiros907,
            ],
          },
        ],
      },
      {
        programId: 'raizes',
        instrument: 'Emenda Parlamentar — Deputado Federal Miguel Lombardi',
        amount: 50000,
        groups: [
          {
            title: 'Documentos da parceria',
            documents: [doc('Plano de trabalho', 'd94354_dffc786365264d3eb47523acda8b31e8.pdf')],
          },
          {
            title: 'Documentos institucionais',
            documents: [
              institutionalDocuments.estatuto,
              doc('Diretoria atual', 'd94354_f1cdd7ff199d4bd883520ed875224462.pdf'),
              doc('Relação nominal dos dirigentes', 'd94354_a0b6347709ec4d61a9280bed2a204a13.pdf'),
              institutionalDocuments.regimento,
              institutionalDocuments.remuneracao,
              institutionalDocuments.contratacao,
              institutionalDocuments.compras,
              institutionalDocuments.alvara,
              institutionalDocuments.cartaoCnpj,
              institutionalDocuments.bombeiros901,
              institutionalDocuments.bombeiros907,
            ],
          },
          {
            title: 'Contas pagas mensais',
            documents: [
              doc('Repasse mensal e acumulado', 'd94354_076991f207cf47de971c9cf6b2c00316.pdf'),
              doc('Extrato de entrada — julho', 'd94354_ba3770360f6340dab6c60925b7239fe7.pdf'),
              doc('Contas pagas — agosto', 'd94354_c9894cd5b5bc4d14959b4d18d220ab9f.pdf'),
              doc('Contas pagas — setembro e outubro', 'd94354_d9b47c580e044c9cbe04878fbc0f244e.pdf'),
              doc('Extratos e aplicações — agosto e setembro', 'd94354_a7493726a4f747f99dfe61433ec73ac0.pdf'),
            ],
          },
        ],
      },
    ],
  },
  // TODO: exemplo — migrar os documentos de 2025, 2023, 2022 e anos anteriores.
  {
    year: 2025,
    reports: [
      {
        programId: 'scfv',
        instrument: '[Termo de Fomento nº 000/2025]',
        groups: [
          {
            title: 'Documentos da parceria',
            documents: [{ title: '[Termo de Fomento 2025]', url: '#' }],
          },
        ],
      },
    ],
  },
]
