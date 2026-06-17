// الاستماع لحدث إرسال النموذج (Form Submission)
document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع الصفحة من إعادة التحميل تلقائياً

    // جلب البيانات المدخلة من قبل المستخدم
    const ownerName = document.getElementById('ownerName').value;
    const petType = document.getElementById('petType').value;
    const appointmentDate = document.getElementById('date').value;
    
    // تحديد عنصر رسالة النجاح وظهوره للمستخدم
    const successMessage = document.getElementById('successMessage');
    
    // صياغة رسالة التأكيد الديناميكية
    successMessage.innerHTML = `شكراً لك يا <strong>${ownerName}</strong>! تم استلام طلبك لحجز موعد لـ <strong>(${petType})</strong> بتاريخ <strong>${appointmentDate}</strong> سنقوم بالتواصل معك قريباً لتأكيد الموعد.`;
    
    // إظهار الرسالة للمستخدم وإعادة تعيين الحقول داخل الفورم
    successMessage.classList.remove('hidden');
    document.getElementById('appointmentForm').reset();
});
