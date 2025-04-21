import test from '@playwright/test';

const scienceArticles = [
    {
        id: 1,
        title: '123 ngày cứu cặp vệ tinh Trung Quốc',
        description:
            'Trung tâm Công nghệ Kỹ thuật Khai thác Không gian (CSU) hôm 15/4 thông báo, hai vệ tinh DRO-A, DRO-B đã được "giải cứu" và đi vào quỹ đạo và hoạt động như thiết kế.',
    },
    {
        id: 2,
        title: 'Chip 2 nm tiên tiến nhất thế giới',
        description:
            'Công ty TSMC giới thiệu microchip tiên tiến nhất thế giới, chip 2 nm, hồi đầu tháng 4 và dự kiến bắt đầu sản xuất hàng loạt vào nửa cuối năm nay',
    },
    {
        id: 3,
        title: 'Trung Quốc phát hiện mỏ thạch anh hơn 35 triệu tấn',
        description:
            'Phát hiện hai mỏ thạch anh độ tinh khiết cao với tổng trữ lượng hơn 35 triệu tấn sẽ giúp Trung Quốc giảm phụ thuộc vào nhập khẩu từ Mỹ.',
    },
    {
        id: 4,
        title: 'Anh hút CO2 từ nước biển để đối phó biến đổi khí hậu',
        description:
            'Dự SeaCURE thử nghiệm hút CO2 từ nước biển tại Weymouth với sự hỗ trợ của chính phủ Anh, có thể mở rộng quy mô để loại bỏ 14 tỷ tấn CO2/năm.',
    },
    {
        id: 5,
        title: 'Cá hóa thạch sống nặng kỷ lục cắn câu',
        description:
            'Sau 4 tiếng vật lộn, cần thủ Art Weston kéo lên một con cá láng lớn Bắc Mỹ khổng lồ, có thể phá kỷ lục thế giới, từ hồ Livingston.',
    },
    {
        id: 6,
        title: 'Châu Âu sắp phóng đồng hồ chính xác nhất trong vũ trụ',
        description:
            'Cơ quan Vũ trụ châu Âu (ESA) sẽ phóng đồng hồ chính xác đến mức lệch chưa đến một giây sau hơn 300 triệu năm lên trạm ISS để kiểm tra thuyết tương đối rộng.  21',
    },
    {
        id: 7,
        title: 'Bên trong Trung tâm điều khiển và vận hành vệ tinh Việt Nam',
        description:
            'Hệ thống mặt đất tại Khu công nghệ cao Hòa Lạc, Hà Nội, bao gồm anten đường kính 9,3 m trung tâm điều khiển và vận hành vệ tinh, sẵn sàng thu nhận tín hiệu, xử lý dữ liệu khi vệ tinh của Việt Nam bay vào quỹ đạo.',
    },
    {
        id: 8,
        title: 'Phát hiện màu sắc mới gây tranh cãi',
        description:
            'Trong thí nghiệm chiếu xung laser vào mắt, các nhà khoa học khẳng định nhìn thấy màu sắc nằm ngoài phạm vi thị giác tự nhiên của con người',
    },
    {
        id: 9,
        title: 'Hố đen đơn độc đầu tiên được xác nhận',
        description:
            'Các nhà khoa học xác nhận sự tồn tại của hố đen đơn độc cách Trái Đất 5.000 năm ánh sáng, di chuyển với tốc độ 51 km mỗi giây.',
    },
    {
        id: 10,
        title: 'Cặp vệ tinh lần đầu chia tách thành công trên quỹ đạo',
        description:
            'Công ty Northrop Grumman làm nên lịch sử khi hai vệ tinh thương mại của một nhiệm vụ kéo dài tuổi thọ vệ tinh tiên phong chia tách thành công.',
    },
];

test('Test personal notes', async ({ page }) => {
    await test.step('access personal notes', async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.locator('a[href="04-xpath-personal-notes.html"]').click();
    });

    await test.step('add notes', async () => {
        for (const article of scienceArticles) {
            await page.locator('input#note-title').fill(article.title);
            await page.locator('textarea#note-content').fill(article.description);
            await page.locator('button#add-note').click();
        }
    });

    await test.step('search notes', async () => {
        await page.locator('input#search').fill(scienceArticles[0].title);
    });
});
