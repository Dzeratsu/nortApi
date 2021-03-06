let documentation = {
    get: {
        1: {
            "url": "/api/documentation",
            "action": "Позволяет получить техническую документацию по запросам"
        },
        2: {
            "url": "/api/getMonthOrders",
            "action": "Позволяет получить все заказы, за месяц, у менеджера осуществившего запрос"
        },
        3: {
            "url": "/api/getMonthOrdersCurrent",
            "action": "Позволяет получить все заказы, за выбранный месяц у менеджера осуществившего запрос",
            "director": "Позволяет получить все заказы, за выбранный месяц у выбранного менеджера"
        },
        4: {
            "url": "/api/getAllManager",
            "action": "Позволяет получить список всех менеджеров"
        },
    },
    post: {
        1: {
            "url": "/api/addOrder",
            "action": "Позволяет добавить новый заказ",
            "access": "Администратор, менеджер"
        },
        2: {
            "url": "/api/transferOrder",
            "action": "Позволяет сменить отвественного менеджера у заказа",
            "access": "Администратор, менеджер"
        },
        3: {
            "url": "/api/req",
            "action": "Регистрация пользователя в системе",
            "access": "Любой, автоматически присваивается уровень 2"
        },
        4: {
            "url": "/api/auth",
            "action": "Авторизация, получение токена",
            "access": "Любой, проверяется пользователь"
        }
    },
    put: {
        1: {
            "url": "/api/editOrder",
            "action": "Позволяет редактировать заказ",
            "access": "Администратор, менеджер"
        }
    },
    delete: {
        1: {
            "url": "/api/orderDel",
            "action": "Позволяет удалить заказ",
            "access": "Администратор"
        }
    }
}

export default JSON.stringify(documentation)