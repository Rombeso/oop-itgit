class GridView {
    /**
     *  properties
     *  @param [array] _tableClass - css классы оформления
     *  @param [array] data  - выходные данные
     *  @param [array] attribute - управляем что выводим
     *  @param [array] _element  - куда выводить таблицу
     *  @param [array] _header  - заголовок таблицы
     *  @param [array] _headerClass  - css классы заголовка
     */

    constructor() {
        this._header = '';
        this._headerClass = [];
        this._tableClass = [];
        this._element = 'body';
        this.attribute = [];
    }

    /**
     *  Method set header
     */

    set header(header){
        if (typeof header === 'string' && header.trim() != '') {
            this._header = header
        } else {
            return false
        }
    }

    /**
     *  Method set headerClass
     */

    set headerClass(headerClass){
        if (typeof headerClass === 'object') {
            this._headerClass = headerClass
        } else {
            return false
        }
    }


    /**
     *  Method set element
     */

    set element(element){
        if (document.querySelector(element)) {
            this._element = element
        } else {
            return false
        }
    }

    /**
     *  Method for show GridViewTable
     */

    render() {
// show header
        if (this._header) {
            const header = document.createElement('h1');
            header.textContent = this._header;
            this._headerClass.forEach(headerClass => {
                header.classList.add(headerClass);
            })
            document.querySelector(this._element).append(header);

        }
        // show table
        const table = document.createElement('table');
        this._tableClass.forEach(tableClass => {
            table.classList.add(tableClass);
        })
        // create table header
        const trHeader = document.createElement('tr');
        for (let key in this.attribute) {
            let th = document.createElement('th');
            if (this.attribute[key].label) {
                th.textContent = this.attribute[key].label
            } else {
                th.textContent = key
            }
            trHeader.append(th)
        }
        table.append(trHeader)


        // create table
        for (let i = 0; i < this.data.length; i ++) {
            let dataArr = this.data[i]; // Одна строка
            let tr = document.createElement('tr');
            for (let key in this.attribute){
                let td = document.createElement('td');
                let value = dataArr[key]
                if (this.attribute[key].value) {
                    value = this.attribute[key].value(dataArr);
                }
                if (this.attribute[key].src) {
                    td.innerHTML = value
                } else {
                    td.textContent = value
                }
                tr.append(td)
            }
            table.append(tr)
        }
        document.querySelector(this._element).append(table);
    }
}