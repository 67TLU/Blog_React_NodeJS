import React from 'react';

function PostDetail() {
  const htmlFromServer = `
    <h1>Tiêu đề bài báo mẫu</h1>
    <p>Đây là một đoạn văn bản có chữ <strong>in đậm</strong> và chữ <em>in nghiêng</em>.</p>
    <p>Hình ảnh minh họa được chèn động:</p>
    <img src="https://picsum.photos" alt="Ảnh minh họa" style="max-width:100%; height:auto;" />
    <p>Đọc thêm tin tức tại <a href="https://google.com" target="_blank">đây</a>.</p>
  `;

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
      {/* 
        Cách xuất HTML ra màn hình trong React:
        Sử dụng thuộc tính dangerouslySetInnerHTML và truyền vào một object có key là __html 
      */}
      <div dangerouslySetInnerHTML={{ __html: htmlFromServer }} />
    </div>
  );
}
export default PostDetail;
