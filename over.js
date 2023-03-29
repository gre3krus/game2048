export class Over {
  constructor(gridElement) {
    this.overElement = document.createElement('img')
    this.overElement.classList.add('over')
    this.restartElement = document.createElement('input')
    this.restartElement.classList.add('restart')
    gridElement.append(this.overElement)
    var over = new Image()
    over.src = 'Over.png'
  }
}