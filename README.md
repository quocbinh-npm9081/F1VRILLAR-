# F1 VRILLAR 
## BÀI TEST PHỎNG VẤN CHO VỊ TRÍ LẬP TRÌNH VIÊN FRONTEND/INTERVIEW ASSIGNMENT FOR THE POSITION OF FRONTEND PROGRAMMER

> **Note**
> Hướng dẫn cài đặt project về máy
> Bật cmd chạy câu lệnh

```
git clone https://github.com/quocbinh-npm9081/F1VRILLAR-.git
```

> Ca


## API document:
> Lấy danh sách các tay đua F1:                                             http://ergast.com/api/f1/drivers

> Lấy thông tin của 1 tay đua:                                              http://ergast.com/api/f1/drivers/{{driverid}}

> Lấy thông tin thành tích của các tay đua theo các năm và các vòng đua :   http://ergast.com/api/f1/{{year}}/{{round}}/results




## Pages :

 - Home: Trang chủ( bao gồm chức năng chuyển động slide, responesive)
  ![image](https://github.com/quocbinh-npm9081/F1VRILLAR-/assets/68917523/97a9dd06-b584-43cc-88fa-0135a11334fc)

  - Drivers : Trang các tay đua( Bao gồm chức năng filter tìm kiếm tay đua, reset filter, Dialog xem thông tin chi tiết, xem thống kê điểm số của tay đua thông qua Bar Chart, Responsive)
  ![image](https://github.com/quocbinh-npm9081/F1VRILLAR-/assets/68917523/4b1688c7-eecf-4115-a11a-927056edcc87)

  - Results : Trang lấy kế quả các vòng đua theo các năm ( Chức năng Filter theo các tiêu chí Năm tổ chức và vòng đua, Hiển thị thành tích lên Table, phân trang phía Client, tóm tắt tổng quan trạng thái của tay đua qua các vòng đua xem tại Pie Chart, cho phép filter trên Pie Chart, responesive,
![image](https://github.com/quocbinh-npm9081/F1VRILLAR-/assets/68917523/7b889803-7401-4cb4-a002-c2c496e4a1a3)


## Components:

  - NavBar: Header của trang F1 VRILLAR ( Bao gồm các nút chuyển trang cũng như resoponsive cho các thiết bị mobile)
    
  ![image](https://github.com/quocbinh-npm9081/F1VRILLAR-/assets/68917523/eda86fea-fbb8-4606-a2ac-727a2f2a62e0)

  ### SelectInput : Ô nhập hiệu, bao gồm các tùy chọn , chọn để tìm kiếm kết quá mong muốn
  ![image](https://github.com/quocbinh-npm9081/F1VRILLAR-/assets/68917523/45bfe38f-1188-43d3-aa09-ce2a87bb880d)
  - ButtonContained: Button có background màu xanh dương, dừng để rest các tùy chọn của người dùng trở về trạng tháy ban đầu ( mặc định chọn toàn bộ tay đua)
   
  ![image](https://github.com/quocbinh-npm9081/F1VRILLAR-/assets/68917523/e2e10b9d-ebce-4dd9-83b2-65b3a36b95a7)

  - CardDriver: Thẻ thông tin của tay đua( bao gồm ảnh của tay đua và thông tin cơ bản của anh ấy, click vào card để xem nhiều thôn tin hơn)
    
  ![image](https://github.com/quocbinh-npm9081/F1VRILLAR-/assets/68917523/3bdb9d10-9555-4a69-ac74-0f5b692d06d2)

  ### Dialog: Dialog mở ra khi bạn click vào CardDriver cho phép bạn xem nhiều thông tin hơn ( xem thống kê điểm số của tay đua, Click vào mục Achievements để xem dưới dạng biểu đồ Bar Chart)
  ! Bạn có thể tìm thấy Bar chart ở Folder Chart -> BarChart.tsx
  
  ![image](https://github.com/quocbinh-npm9081/F1VRILLAR-/assets/68917523/9362343d-64ad-45d9-b4e3-c944483add61)
  ![image](https://github.com/quocbinh-npm9081/F1VRILLAR-/assets/68917523/5479f41a-9023-43a1-926b-2f6f6bffa6e6)

  - PieChart: Component hiển thị trạng thái của các tay đua khi kết thức các vòng thi ( animation khi filter, responsive)
  - 
  ![image](https://github.com/quocbinh-npm9081/F1VRILLAR-/assets/68917523/eca58406-ec05-445b-8fe4-9e31c18c2848)

  - StickHeaderTable: Component hiển thị danh sách kết quả các của tay đua theo năm và theo vòng khi người người select vào tùy chọn, có chưc năng phân trang phía Client.
   
  ![image](https://github.com/quocbinh-npm9081/F1VRILLAR-/assets/68917523/66ea30e8-1487-436c-9ad0-5e21e19dd492)


> Domain : https://f1-vrillar-caoquocbinh.vercel.app/
> Deployment: https://f1-vrillar-caoquocbinh-r2ezwayla-quocbinh-npm9081.vercel.app/
 
> **Warning**
> Domain và Deployment đang có lỗi không thể call API, anh chị xin vui lòng Clone Source về máy để Project được chỉnh chu hơn ạ, Em xin lỗi về sự bất tiện này :(((




