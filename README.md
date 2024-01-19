tokyo-tech-lab-test
install prompt-sync trước khi chạy:  npm i prompt-sync

Diablo (logic)
Mark đang chơi Diablo II.

Để qua được màn chơi, người chơi cần giết hết m con quái vật trong map. Mark dùng 1 thanh kiếm có độ bền d. Mỗi lần giết 1 con quái vật thì độ bền vũ khí giảm k đơn vị. Mark có thể sử dụng chức năng sửa đồ để phục hồi độ bền của thanh kiếm về như mới ( d đơn vị); mỗi lần sửa cần tốn c gold. Tuy nhiên nếu 1 vũ khí có độ bền giảm về 0 hoặc nhỏ hơn thì vũ khí đó sẽ biến mất, không thể sửa được nữa.
Hãy giúp Mark tính xem cần chuẩn bị tối thiểu bao nhiêu gold để có thể an toàn qua màn. Nếu không thể qua được map, in ra màn hình số -1.

To run: node Diablo.js
Input format: Enter values on the terminal, for example: 10 5 1 2

Cân bằng ngoặc
Cho 1 xâu chỉ gồm các ký tự ngoặc: { [ ( ) ] }
Xét xem xâu được cho có cân bằng không.
Xâu được coi là cân bằng khi
Mỗi dấu mở ngoặc có 1 dấu đóng ngoặc tương ứng không nằm trước nó.
Tất cả các chuỗi con giữa mọi cặp ngoặc phải cân bằng.
1 xâu rỗng cũng được coi là xâu cân bằng.

To run: node can_bang_ngoac.js
Input format: Enter values on the terminal, for example: (), {[]}
Note: Press the Enter key twice after each input, and press the Space key when entering the next bracket.

Giao hữu bóng đá (tổ hợp)
Tokyo Techies và Tokyo Tech Lab tổ chức giao hữu bóng đá. Anh em các miền rất hào hứng đến xem và cổ vũ.
Có mỗi anh TùngPD do mải code nên quên giờ, đến khi nhớ ra và chạy đến thì trận đấu đã diễn ra hết hiệp 1. Tỉ số lúc này là TT x - y TTLab. Anh Tùng muốn tỏ ra nguy hiểm và đoán thứ tự ghi bàn của cả hiệp 1.
Hãy giúp anh Tùng viết chương trình đếm số cách để đạt được tỉ số x - y như hiện tại.

To run: node football.js
Input format: Enter values on the terminal, for example: 2 0, 3 1, ...