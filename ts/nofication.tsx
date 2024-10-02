function showNotification(message: string): void {
    const notification = document.getElementById('notification') as HTMLElement;
    const messageSpan = notification.querySelector('.message') as HTMLElement;

    if (messageSpan) {
        messageSpan.textContent = message;
    }

    notification.classList.add('visible');

    // Automatically hide after 3 seconds
    setTimeout(() => {
        closeNotification();
    }, 3000);
}

function closeNotification(): void {
    const notification = document.getElementById('notification') as HTMLElement;
    notification.classList.remove('visible');
}

// Show notification on page load
window.onload = function(): void {
    showNotification('Welcome');
};
