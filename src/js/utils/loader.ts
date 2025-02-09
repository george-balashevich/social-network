function loader(selector: string, isShown: boolean) {
  const loader = document.querySelector(selector) as HTMLElement | null

  if (!loader) {
    throw new Error('Elem is not found')
  }
  if(isShown) {
    loader.style.display = 'block'
  } else {
    loader.style.display = 'none'
  }
}

export { loader }