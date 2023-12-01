

class NewDataCards {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    // ЗДЕСЬ БУДЕТ ВАШ КЛЮЧ, ЭТОТ КЛЮЧ МОЖЕТ НЕ РАБОТАТЬ
    _apiKey = 'apikey=c5d6fc8b83116d92ed468ce36bac6c62';
//Функция для 
    getResource = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }
//Получение всех карточек
//функция getResource - возвращает данный в формате Json - дальше запрос
    getAllCards = () => {
        return this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
    }
//Метод для получение только одной карточки по id
//${this._apiBase} - уникальный идентификатор, приходит просто как аргумент 
    getCard = (id) => {
        return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    }
}

export default NewDataCards;