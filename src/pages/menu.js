const menus = [
    {
        id: 1,
        name: 'Khám phá',
        links: '/explore',
        namesub: [
            {
                id: 1,
                sub: 'Nhà sáng tạo',
                links: '/creator'
            },
            {
                id: 2,
                sub: 'Sản phẩm',
                links: '/item'
            },
            {
                id: 3,
                sub: 'Thông tin sản phẩm',
                links: '/item-details'
            },
            
        ],
    },
    {
        id: 2,
        name: 'Tài khoản',
        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'Đăng ký',
                links: '/register'
            },
            {
                id: 2,
                sub: 'Đăng nhập',
                links: '/login'
            },
            
        ],
    },
    {
        id: 3,
        name: 'Tạo NFT',
        links: '/create-item',
    },
    
]

export default menus;