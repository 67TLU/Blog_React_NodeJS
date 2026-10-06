import React, { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css'; // Import file CSS giao diện của Quill

function AdminEditor() {
  // State dùng để lưu trữ toàn bộ chuỗi HTML của bài viết
  const [content, setContent] = useState('');

  // Hàm xử lý khi người dùng bấm nút "Đăng bài"
  const handleSubmit = (e) => {
    e.preventDefault();
    // Chuỗi HTML hoàn chỉnh sẵn sàng để gửi lên Backend và lưu vào MySQL
    console.log("Dữ liệu HTML chuẩn bị gửi lên DB:", content);
    
    // Ví dụ gọi API gửi data: 
    // fetch('/api/posts', { method: 'POST', body: JSON.stringify({ content }) })
    
    alert("Đã nhận dữ liệu HTML bài viết! Hãy kiểm tra Console.");
  };

  // Cấu hình các nút công cụ hiển thị trên thanh Toolbar (Bold, Italic, Link, Image...)
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],        // Định dạng chữ
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],     // Danh sách số / chấm tròn
      ['link', 'image'],                                // Chèn link và chèn ảnh
      ['clean']                                         // Nút xóa hết định dạng
    ],
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Trang viết bài báo mới</h2>
      <form onSubmit={handleSubmit}>
        
        {/* Bộ soạn thảo Rich Text Editor */}
        <div style={{ marginBottom: '20px' }}>
          <ReactQuill 
            theme="snow" 
            value={content} 
            onChange={setContent} 
            modules={modules}
            placeholder="Nhập nội dung bài báo tại đây..."
          />
        </div>

        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Đăng bài viết
        </button>
      </form>
    </div>
  );
}

export default AdminEditor;
