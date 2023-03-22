# Hướng dẫn sử dụng
<h4>Yêu cầu</h4>
<span>Cần có npm để chạy ứng dụng</span>

<h4>Hướng dẫn chạy</h4>
<ol>
<li>Chạy sẵn Backend cung cấp file JSON</li>
<li>Mở folder build</li>
<li>Đặt link file JSON làm tham số truyền vào hàm fetch() trong hàm getJSON() trong file script.js</li>
<img src="resources/jsonguide.png"></img>
<li>Sử dụng terminal, cd đến thư mục "build" và chạy: serve -s build<br>
<i>Ở bước này có thể gặp lỗi, xem hướng dẫn sửa lỗi ở phần Troubleshooting phía dưới</i></li>
<li>Script sẽ fetch JSON từ API cung cấp bới Backend và re-render trang web mỗi 1 giây</li>
</ol>

<h4>Các thành phần của giao diện</h4>
<img src="resources/guide.png"></img>

<h4>Troubleshooting (Windows)</h4>
<p>Nếu gặp lỗi: serve : File C:\...\serve.ps1 cannot be loaded because running scripts is disabled on this system. For more 
information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1
+ serve -s build
+ ~~~~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess</p>
<span>Cách sửa:</span>
<ol>
<li>Chạy Powershell bằng quyền admin</li>
<li>Chạy command: Get-ExecutionPolicy</li>
<li>Nếu execution policy hiện tại là "Restricted", chạy: Set-ExecutionPolicy RemoteSigned</li>
<li>Gõ 'Y' và ấn Enter</li>
<li>Chạy lại serve -s build</li>
</ol>
