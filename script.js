function copyIP() {
    const ipText = "142.93.97.229:22500";
    navigator.clipboard.writeText(ipText).then(() => {
        alert("✅ تم نسخ عنوان السيرفر!");
    }).catch(err => {
        console.error("خطأ في النسخ:", err);
    });
}
