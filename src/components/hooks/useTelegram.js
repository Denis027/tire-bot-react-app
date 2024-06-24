const tg = window.Telegram.WebApp;

export const useTelegram = () => {
    const onClose = () => {
        tg.close();
    };

    const onToggleButton = () => {
        if (tg.MainBotton.isVisible) {
            tg.MainBotton.hide();
        } else {
            tg.MainBotton.show();
        }
    };
    return {
        onClose,
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user,
    };
};
