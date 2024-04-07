const handleRequest = (res) => {                                            
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
}

const config = {                                                             
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-10',
    headers: {
      authorization: '70b83c6e-04ed-4989-8496-f4e12687c473',
      'Content-Type': 'application/json'
    }
  }

export const getInitialCards = () => {                                          // функция получения данных всех карточек
    return fetch(`${config.baseUrl}/cards`, {
        method: "GET",
        headers: config.headers
    })
      .then(handleRequest);
  } 

export const getUserData = () => {                                              // функция получения данных пользователей
    return fetch(`${config.baseUrl}/users`, {
        method: 'GET',
        headers: config.headers,
  })
        .then(handleRequest);
}; 
  

export const getProfileInfo = () => {                                           // функция получения данных профиля
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'GET',
        headers: config.headers,
  })
        .then(handleRequest);
}; 


export const editMyProfile = (nameProfile, jobProfile) => {                     // обновления данных профиля
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: `${nameProfile}`,
            about: `${jobProfile}`
        })
  })
  .then(handleRequest);
}; 


export const addOneCard = (nameCard, urlCard) => {                              // добавление карточки
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: `${nameCard}`,
            link: `${urlCard}`
        })
  })
  .then(handleRequest);
}; 

export const changeAvatar = (urlAvatar) => {                                    // обновление аватара
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            avatar: `${urlAvatar}`
        })
  })
  .then(handleRequest);
}; 

export const deleteOneCard = (cardId) => {                                      // удаление одной карточки
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: config.headers
  })
  .then(handleRequest);
}; 

export function likeCard(cardId) {                                              // лайк карточки
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: config.headers
    })
      .then(handleRequest)
  }

  export function unlikeCard(cardId) {                                          // удаление лайка карточки
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: config.headers
    })
      .then(handleRequest)
  }
  