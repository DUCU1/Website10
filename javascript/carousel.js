let pdfIndex = 1;
showPdf(pdfIndex);
//Changes the value of pdfIndex, depending on what the pdfIndex is another pdf is selected
document.getElementById("prev-btn").addEventListener("click", () => {
  showPdf(pdfIndex -= 1);
});

document.getElementById("next-btn").addEventListener("click", () => {
  showPdf(pdfIndex += 1);
});

function showPdf(index) {
  const pdfs = ["../media/pdf/Documentation.pdf#toolbar=0"
    , "../media/pdf/Infrastructure Integration 2.pdf#toolbar=0"];
  if (index > pdfs.length) {
    pdfIndex = 1;
  }
  if (index < 1) {
    pdfIndex = pdfs.length;
  }
  document.getElementById("pdf-shower").setAttribute("src", pdfs[pdfIndex - 1]);
}
