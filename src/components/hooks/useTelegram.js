export const useTelegram = () => {
    const onClose = () => {
        window.Telegram.WebApp.close();
    };

    const onToggleButton = () => {
        if (window.Telegram.WebApp.MainBotton.isVisible) {
            window.Telegram.WebApp.MainBotton.hide();
        } else {
            window.Telegram.WebApp.MainBotton.show();
        }
    };
    return {
        onClose,
        onToggleButton,
        tg: window.Telegram.WebApp,
        user: window.Telegram.WebApp.initDataUnsafe?.user,
    };
};
