const fakeData = [
    {
        title: 'Sách nói chất lượng',
        categories: [
            { name: 'Tất cả', id: null },
            { name: 'Sắp phát hành', id: 1 },
            { name: 'Tâm linh', id: 2 },
            { name: 'Con cái', id: 3 },
            { name: 'Kỹ năng', id: 4 },
            { name: 'Doanh nhân', id: 5 },
            { name: 'Thành công', id: 6 },
            { name: 'Hạnh phúc', id: 7 },
            { name: 'Lịch sử', id: 8 }
        ],
        items: [
            { id: 1, avtSrc: 'https://picsum.photos/201/201?img=6' },
            { id: 2, avtSrc: 'https://picsum.photos/201/201?img=7' },
            { id: 3, avtSrc: 'https://picsum.photos/201/201?img=8' },
            { id: 4, avtSrc: 'https://picsum.photos/201/201?img=9' },
            { id: 5, avtSrc: 'https://picsum.photos/201/201?img=10' },
            { id: 6, avtSrc: 'https://picsum.photos/201/201?img=10' },
            { id: 7, avtSrc: 'https://picsum.photos/201/201?img=10' }
        ]
    },
    {
        title: 'Truyện nói hấp dẫn',
        categories: [
            {
                "name": "Tất cả",
                "id": null
            },
            {
                "name": "Kinh điển Việt Nam",
                "id": 1
            },
            {
                "name": "Kinh điển quốc tế",
                "id": 2
            },
            {
                "name": "Ngôn tình",
                "id": 3
            },
            {
                "name": "Văn học QT hiện đại",
                "id": 4
            },
            {
                "name": "Văn học VN hiện đại",
                "id": 5
            },
            {
                "name": "Thành công",
                "id": 6
            },
            {
                "name": "Trinh thám",
                "id": 7
            }
        ],
        items: [
            { id: 1, avtSrc: 'https://picsum.photos/201/201?img=11' },
            { id: 2, avtSrc: 'https://picsum.photos/201/201?img=12' },
            { id: 3, avtSrc: 'https://picsum.photos/201/201?img=13' },
            { id: 4, avtSrc: 'https://picsum.photos/201/201?img=14' },
            { id: 5, avtSrc: 'https://picsum.photos/201/201?img=15' },
            { id: 6, avtSrc: 'https://picsum.photos/201/201?img=10' },
            { id: 7, avtSrc: 'https://picsum.photos/201/201?img=10' }

        ]
    },
    {
        title: 'Podcast đặc sắc',
        categories: [
            {
                "name": "Tất cả",
                "id": null
            },
            {
                "name": "Tin tức",
                "id": 1
            },
            {
                "name": "Văn hóa",
                "id": 2
            },
            {
                "name": "Giải trí",
                "id": 3
            },
            {
                "name": "Kiến thức",
                "id": 4
            },
            {
                "name": "Phân loại",
                "id": 5
            },
            {
                "name": "Kinh dị",
                "id": 6
            },
            {
                "name": "Ngủ ngon",
                "id": 7
            },
            {
                "name": "Thiền-tĩnh tâm",
                "id": 8
            },
            {
                "name": "Tâm sự",
                "id": 9
            }
        ],
        items: [
            { id: 1, avtSrc: 'https://picsum.photos/201/201?img=16' },
            { id: 2, avtSrc: 'https://picsum.photos/201/201?img=17' },
            { id: 3, avtSrc: 'https://picsum.photos/201/201?img=18' },
            { id: 4, avtSrc: 'https://picsum.photos/201/201?img=19' },
            { id: 5, avtSrc: 'https://picsum.photos/201/201?img=20' },
            { id: 6, avtSrc: 'https://picsum.photos/201/201?img=10' },
            { id: 7, avtSrc: 'https://picsum.photos/201/201?img=10' }
        ]
    },
    {
        title: 'Sách tóm tắt tinh gọn',
        items: [
            { id: 1, avtSrc: 'https://picsum.photos/201/201?img=21' },
            { id: 2, avtSrc: 'https://picsum.photos/201/201?img=22' },
            { id: 3, avtSrc: 'https://picsum.photos/201/201?img=23' },
            { id: 4, avtSrc: 'https://picsum.photos/201/201?img=24' },
            { id: 5, avtSrc: 'https://picsum.photos/201/201?img=25' },
            { id: 6, avtSrc: 'https://picsum.photos/201/201?img=10' },
            { id: 7, avtSrc: 'https://picsum.photos/201/201?img=10' }
        ]
    },
]

const fakeSuggest = [
    { id: 1, avtSrc: 'https://picsum.photos/201/201?img=1' },
    { id: 2, avtSrc: 'https://picsum.photos/201/201?img=2' },
    { id: 3, avtSrc: 'https://picsum.photos/201/201?img=3' },
    { id: 4, avtSrc: 'https://picsum.photos/201/201?img=4' },
    { id: 5, avtSrc: 'https://picsum.photos/201/201?img=5' },
    { id: 6, avtSrc: 'https://picsum.photos/201/201?img=5' },
    { id: 9, avtSrc: 'https://picsum.photos/201/201?img=5' },
    { id: 8, avtSrc: 'https://picsum.photos/201/201?img=5' },
    { id: 7, avtSrc: 'https://picsum.photos/201/201?img=5' },
    { id: 10, avtSrc: 'https://picsum.photos/201/201?img=5' }
]

const newContent = [
    { id: 1, avtSrc: 'https://picsum.photos/201/201?img=26' },
    { id: 2, avtSrc: 'https://picsum.photos/201/201?img=27' },
    { id: 3, avtSrc: 'https://picsum.photos/201/201?img=28' },
    { id: 4, avtSrc: 'https://picsum.photos/201/201?img=29' },
    { id: 5, avtSrc: 'https://picsum.photos/201/201?img=30' },
    { id: 6, avtSrc: 'https://picsum.photos/201/201?img=10' },
    { id: 7, avtSrc: 'https://picsum.photos/201/201?img=10' }
]

const authors = [
    { id: 1, avtSrc: 'https://picsum.photos/201/201?img=26' },
    { id: 2, avtSrc: 'https://picsum.photos/201/201?img=27' },
    { id: 3, avtSrc: 'https://picsum.photos/201/201?img=28' },
    { id: 4, avtSrc: 'https://picsum.photos/201/201?img=29' },
    { id: 5, avtSrc: 'https://picsum.photos/201/201?img=30' },
    { id: 6, avtSrc: 'https://picsum.photos/201/201?img=10' },
    { id: 7, avtSrc: 'https://picsum.photos/201/201?img=10' }
]

export { fakeData, fakeSuggest, newContent, authors }