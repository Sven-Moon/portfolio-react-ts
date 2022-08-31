

export default function slideIn(id:string) {
  const delay: number = 60
  
  let el: HTMLElement | null = document.getElementById(id)

  const translateXMenuIn = () => {
    const menu: Element | null = document.querySelector(
      `#${id} .dropdown__menu`
    )
    menu?.classList.add("show");

    const menuItems = document.querySelectorAll(`#${id} a`) as NodeListOf<HTMLElement>
    let nodeDelay: number = delay

    menuItems.forEach((node) => {
      if (node?.dataset?.index) {
        nodeDelay = parseInt(node.dataset.index) * delay;
      }
      node.classList.add("translate-x");      
      node.style.animation = `300ms ease ${nodeDelay}ms 1 normal forwards running translateXIn`;
    });
  }



  const translateXMenuOut = () => {
    const menu: Element | null = document.querySelector(`#${id} .dropdown__menu`);

    // see note above for explanation
    const menuItems = document.querySelectorAll(`#${id} a`) as NodeListOf<HTMLElement>
    let nodeDelay: number = delay

    menuItems.forEach((node) => {
      if (node?.dataset?.index) {
        nodeDelay = parseInt(node.dataset.index) * delay;
        node.style.animation = `300ms ease ${nodeDelay}ms 1 normal forwards running translateXOut`;
      }
      const nodeExitDelay = 300
      // remove the menu
      setTimeout(() => {
        menu?.classList.remove("show");
      }, delay * menuItems.length + nodeExitDelay);
    });
  }


  el?.addEventListener("mouseenter", translateXMenuIn)
  el?.addEventListener("mouseleave", translateXMenuOut)
}