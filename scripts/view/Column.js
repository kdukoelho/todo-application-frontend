export default class Column{
    constructor(id, title){
        this.elements = {}
        this.elements.root = Column.createRoot();
        this.elements.title = this.elements.root.querySelector('.board-title')
        this.elements.items = this.elements.root.querySelector('.dropzone')
        this.elements.addBtn = this.elements.root.querySelector('.add-button')
    
        this.elements.root.dataset.id = id;
        this.elements.title.textContent = title;
    }

    static createRoot(){
        const range = document.createRange()

        range.selectNodeContents(document.body)

        return range.createContextualFragment(`
        <div class="board">
            <div class="board-title"></div>
            <div class="dropzone">
            </div>
            <button class="add-button" type="button">+</button>
        </div>
        `).children[0]
    }
}