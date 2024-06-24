export const useTelegram = () => {
    const tg = window.Telegram.WebApp;

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
