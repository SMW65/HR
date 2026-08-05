# Maneekan HR Center — Multi-page

เว็บไซต์ถูกแยกเป็นหลายหน้าแล้ว:

- `index.html` หน้าแรก
- `personnel.html` บุคลากร
- `services.html` บริการออนไลน์
- `news.html` ข่าวและประกาศ
- `forms.html` แบบฟอร์ม
- `calendar.html` ปฏิทิน
- `contact.html` ติดต่อเรา

## วิธีอัปโหลดทับเว็บไซต์เดิมบน GitHub

1. สำรอง Repository เดิม หรือสร้าง Branch ใหม่
2. ลบ/แทนที่ไฟล์เดิมด้วยไฟล์ทั้งหมดในโฟลเดอร์นี้
3. ต้องรักษาโครงสร้าง `css`, `js`, `assets`
4. กด Commit changes
5. เปิด GitHub Pages แล้วกด Ctrl + F5

## จุดที่ต้องเปลี่ยน

ค้นหาคำว่า `data-placeholder-link` เพื่อใส่ลิงก์ Google Form, Drive หรือ Apps Script จริง  
เปลี่ยน `assets/logo-placeholder.svg` เป็นตราโรงเรียนจริง  
แก้ข้อมูลตัวอย่าง ข่าว วันที่ บุคลากร และกำหนดการก่อนใช้งานจริง
