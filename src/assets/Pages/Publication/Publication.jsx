import React from "react";
import "./Publication.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/footer";

function Publication() {
  const books = [
    {
      id: 1,
      header: "Cell and Molecular Biology",
      desc: "K, Vijayakumaran Nair Ph.D., M Jayaprakash, R.AshaDevi Ph.D, Suboj Babykutty, Ph.D. ISBN: 978-81-952407-0-8",
      link: "",
    },
    {
      id: 22,
      header: `Polymeric Materials for Biomedical Implants
      Characterization, Properties, and Applications
      `,
      desc: `
      1st Edition - October 3, Editors: Sabu Thomas, Abhimanyu Tharayil, 2023 Paperback ISBN: 9780323996907
      `,
      link: "",
    },
  ];
  const publicationData = [
    {
      id: 2,
      header:
        "Obesity promotes resistance to anti-VEGF therapy in breast cancer by up-regulating IL-6 and potentially FGF-2.",
      desc: ` Incio J, Ligibel JA, McManus, Suboj P, Jung K, Kawaguchi K, Pinter M, Babykutty S, Chin SM,
      Vardam TD, Huang Y, Rahbari NN, Roberge S, Wang D, Gomes-Santos IL1, Puchner SB, Schlett
      CL, Hoffmman U, Ancukiewicz M, Tolaney SM, Krop IE, Duda DG, Boucher Y, Fukumura D,
      Jain RK. Obesity promotes resistance to anti-VEGF therapy in breast cancer by upregulating
      IL-6 and potentially FGF-2. Sci Transl Med. 2018 Mar 14;10 (432).
      `,
      link: `http://stm.sciencemag.org/content/10/432/eaag0945`,
    },
    {
      id: 3,
      header:
        "Obesity-Induced Inflammation and Desmoplasia Promote Pancreatic Cancer Progression and Resistance to Chemotherapy.",
      desc: `Incio J, Liu H, Suboj P, Chin SM, Chen IX, Pinter M, Ng MR, Nia HT, Grahovac J, Kao S,
      Babykutty S, Huang Y, Jung K, Rahbari NN, Han X, Chauhan VP, Martin JD, Kahn J, Huang P,
      Desphande V, Michaelson J, Michelakos TP, Ferrone CR, Soares R, Boucher Y, Fukumura D, Jain
      RK. Obesity-induced inflammation and desmoplasia promote pancreatic cancer progression and
      resistance to chemotherapy.Cancer Discov. 2016 May 31; Aug 6 (8): 852-69
      `,
      link: "https://www.ncbi.nlm.nih.gov/pubmed/27246539",
    },
    {
      id: 4,
      header:
        "PlGF/VEGFR-1 Signaling Promotes Macrophage Polarization and Accelerated Tumor Progression in Obesity.",
      desc: ` Incio J, Tam J, Rahbari NN, Suboj P, McManus DT, Chin SM, Vardam TD, Batista A,
      Babykutty S, Jung K, Khachatryan A, Hato T, Ligibel JA, Krop IE, Puchner SB, Schlett CL,
      Hoffmman U, Ancukiewicz M, Shibuya M, Carmeliet P, Soares R, Duda DG, Jain RK, Fukumura D.
      PlGF/VEGFR-1 Signaling Promotes Macrophage Polarization and Accelerated Tumor Progression in Obesity.Clin Cancer Res. 2016 Jun 15;22(12):2993-3004.
      `,
      link: "http://clincancerres.aacrjournals.org/content/early/2016/02/09/1078-0432.CCR-15-1839",
    },
    {
      id: 5,
      header:
        "Metformin Reduces Desmoplasia in Pancreatic Cancer by Reprogramming Stellate Cells and Tumor-Associated Macrophages.",
      desc: `Incio J, Suboj P, Chin SM, Vardam-Kaur T, Liu H, Hato T, Babykutty S, Chen I, Deshpande V, Jain RK, Fukumura D. Metformin Reduces Desmoplasia in Pancreatic Cancer by Reprogramming Stellate Cells and Tumor-Associated Macrophages. PLoS One. 2015 Dec 7;10(12):e0141392.`,
      link: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0141392",
    },
    {
      id: 6,
      header:
        "Nimbolide retards tumor cell migration, invasion, and angiogenesis by downregulating MMP-2/9 expression via inhibiting ERK1/2 and reducing DNA-binding activity of NF-κB in colon cancer cells.",
      desc: `S. Babykutty, Priya P.S, Nandini.R.J, Suresh Kumar M.A, Mangalam Nair, Priya Srinivas, Srinivas Gopala, Nimbolide retards tumor cell migration, invasion and angiogenesis by down regulating MMP-2/9 expression via inhibiting ERK1/2 and reducing DNA binding activity of NF- κB in colon cancer cells. Mol Carcinog. 2012 Jun; 51(6):475-90.`,
      link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/mc.20812",
    },
    {
      id: 7,
      header:
        "Insidious role of nitric oxide in migration/invasion of colon cancer cells by upregulating MMP-2/9 via activation of cGMP-PKG-ERK signaling pathways",
      desc: ` S. Babykutty, P. Suboj, A. Nair, C. Mohan, P. Srinivas, S. Gopala, Nitric oxide enhances migration/invasion of colon cancer cells by upregulating MMP-2/9 via activation of the cGMP-PKG- ERK signaling pathways. Clinical and Experimental Metastasis. 2012 Jun; 29(5):471-92.`,
      link: "https://www.ncbi.nlm.nih.gov/pubmed/22419013",
    },
    {
      id: 8,
      header:
        "Aloe emodin inhibits colon cancer cell migration/angiogenesis by downregulating MMP-2/9, RhoB and VEGF via reduced DNA binding activity of NF-κB.",
      desc: ` P. Suboj, S. Babykutty, V.G. D. Roshan, R. S. Nair, P. Srinivas, S. Gopala. Aloe emodin inhibits colon cancer cell migration/angiogenesis by downregulating MMP-2/9, RhoB and VEGF via reduced DNA binding activity of NF-kB. European Journal of Pharmaceutical Science. 2012 Apr 11; 45(5): 581-91.`,
      link: "https://europepmc.org/abstract/med/22227305",
    },
    {
      id: 9,
      header:
        "Aloe emodin induces G2/M cell cycle arrest and apoptosis via activation of caspase-6 in human colon cancer cells",
      desc: `P. Suboj, S. Babykutty, P. Srinivas, S. Gopala. Aloe emodin induces G2/M cell cycle arrest, and apoptosis via activation of caspase- 6 in human colon cancer cells. Pharmacology. 2012; 89:91-98.`,
      link: `https://www.ncbi.nlm.nih.gov/pubmed/22343391`,
    },
    {
      id: 10,
      header:
        "Apoptosis induction of Centella asiatica on human breast cancer cells",
      desc: `S. Babykutty, Jose Padikkala, P. P. Sathiadevan, Vinod Vijayakurup, T. K. Abdul Azis, Priya Srinivas, Srinivas Gopala. Apoptosis induction of centella asiatica on human breast cancer cells. Afr J Tradit Complement Altern Med. 2008 Oct 25; 6(1):9-16.`,
      link: `https://www.ncbi.nlm.nih.gov/pubmed/20162036`,
    },
  ];

  const reviewData = [
    {
      id: 11,
      header:
        "Enhancement of immune surveillance in breast cancer by targeting hypoxic tumor endothelium: Can it be an immunological switch point?",
      desc: ` Babykutty S, Thomas JA, GM AG, Xavier H, Suboj P, Gupta G, PALIT P. Enhancement of
      immune surveillance in breast cancer by targeting hypoxic tumor endothelium: Can it be an
      immunological switch point?. Frontiers in Oncology.;13:818.`,
      link: ` https://www.frontiersin.org/articles/10.3389/fonc.2023.1063051/full`,
    },
    {
      id: 12,
      header:
        "Molecular mechanism of emodin action: Transition from laxative ingredient to an antitumor agent",
      desc: ` Srinivas Gopal, S. Babykutty, Priya Prasanna Sathiadevan, priya Srinivas, Molecular mechanism of emodin action: transition from laxative ingredient to an antitumor agent. Med Res Rev. 2007 Sep; 27(5): 591-608`,
      link: ` https://onlinelibrary.wiley.com/doi/abs/10.1002/med.20095`,
    },
    {
      id: 13,
      header:
        "Arginine dependence of tumor cells: targeting a chink in cancer’s armor",
      desc: ` Patil MD, Bhaumik J, Babykutty S, Banerjee UC, Fukumura D. Arginine dependence of tumor cells: targeting a chink in cancer's armor. Oncogene. 2016 Apr 25. doi: 10.1038/onc.2016.37, [Epub ahead of print].`,
      link: ` https://www.nature.com/articles/onc201637`,
    },
  ];

  return (
    <div>
      <Navbar />
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-xs-12 publications-heading">
            <h4>
              <span style={{ color: "" }}>Publications</span>
            </h4>
            {/* <h4>Where Ideas Take Shape, Words Find Life</h4> */}
          </div>
        </div>
        <hr />
      </div>
      <div className="container mb-3">
        <h3 className="mt-5 section-heads">Books</h3>
        <div class="accordion accordion-flush" id="accordionFlushExample">
          {books.map((data) => (
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#collapse" + data.id}
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  {data.header}
                </button>
              </h2>
              <div
                id={"collapse" + data.id}
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <p>{data.desc}</p>
                  {/* <a href={data.link}>Visit Link</a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <h3 className="mt-5 mb-5  section-heads">Publications</h3>
        <div class="accordion accordion-flush" id="accordionFlushExample">
          {publicationData.map((data) => (
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#collapse" + data.id}
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  {data.header}
                </button>
              </h2>
              <div
                id={"collapse" + data.id}
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <p>{data.desc}</p>
                  <a
                    href={data.link}
                    className="btn btn-primary"
                    style={{ width: "150px" }}
                  >
                    Read Publication{" "}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mb-4">
        <div className="row">
          <h4 className="mt-4 mb-4  section-heads">Reviews</h4>
          {reviewData.map((data) => (
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#collapse" + data.id}
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    {data.header}
                  </button>
                </h2>
                <div
                  id={"collapse" + data.id}
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <p>{data.desc}</p>
                    <a
                      href={data.link}
                      className="btn btn-success"
                      style={{ width: "150px" }}
                    >
                      Read Reviews
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Publication;
