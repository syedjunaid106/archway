const ScrollTo = (elementId: any, offset = 0) => {
    const element: any = document.getElementById(elementId);
    const y = element.getBoundingClientRect().top + window.scrollY + offset;
    if (element) {
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  
  export default ScrollTo;