function showPopup() {
    document.getElementById('overlay').style.display = 'flex'; // แสดง Pop-up" 
    }
    function submitForm(event) {
    event.preventDefault(); // ป้องกันการรีเฟรชหน้าเว็บ

    // เพิ่มโค้ดส่งข้อมูลไปยังเซิร์ฟเวอร์ หรือประมวลผลข้อมูลตามที่ต้องการทำ
    // ตัวอย่างเช่นการใช้ fetch API ส่งข้อมูลไปยัง URL
    const formData = new FormData(document.getElementById('myForm'));
    fetch('/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        // ทำการประมวลผลผลลัพธ์หลังจากส่งข้อมูลสำเร็จ
        console.log('ส่งข้อมูลสำเร็จ');
        // ทำสิ่งที่คุณต้องการหลังจากส่งข้อมูลเรียบร้อย
        // ยิง event เพื่อซ่อน Pop-up
        document.getElementById('overlay').style.display = 'none';
        window.location.href = "ActivitiesTop.html";
    })
    .catch(error => {
        // กรณีที่เกิดข้อผิดพลาดในการส่งข้อมูล
        console.error('มีข้อผิดพลาดในการส่งข้อมูล:', error);
        // ทำสิ่งที่คุณต้องการในกรณีของข้อผิดพลาด เช่น แสดงข้อความแจ้งเตือนผู้ใช้
    });
    }

