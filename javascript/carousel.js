let pdfIndex = 1;
showPdf(pdfIndex);

document.getElementById("prev-btn").addEventListener("click", () => {
  showPdf(pdfIndex -= 1);
});

document.getElementById("next-btn").addEventListener("click", () => {
  showPdf(pdfIndex += 1);
});

function showPdf(index) {
  const pdfs = ["../media/pdf/pdf1.pdf#toolbar=0", "../media/pdf/pdf2.pdf#toolbar=0"]; 
  if (index > pdfs.length) {
    pdfIndex = 1;
  }
  if (index < 1) {
    pdfIndex = pdfs.length;
  }
  document.getElementById("pdf-shower").setAttribute("src", pdfs[pdfIndex - 1]);
}
