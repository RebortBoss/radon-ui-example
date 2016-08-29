<style lang="scss">
    .product {
        padding: 1rem;
        .action-content {
            display: flex;
        }
        .action-right {
            width: 100%;
            text-align: right;
        } 
    }
    @media screen and (max-width: 768px) {
        .product {
            padding: 1rem 0;
            .table-card {
                overflow-x: auto;
                .rd-table {
                    min-width: 40rem;
                }
            }
        }
    }
</style>

<template>
    <div class="product">
        <rd-card class="action-content">
            <div class="action-right">
                <rd-drop-button text="操作">
                    <rd-button>操作</rd-button>
                    <rd-button>删除</rd-button>
                </rd-drop-button>
            </div>
        </rd-card>
        <rd-card class="table-card">
            <rd-table :table="productTable"></rd-table>
        </rd-card>
    </div>
</template>

<script>
import {
    rdCard,
    rdTable,
    rdButton,
    rdDropButton
} from 'radon-ui'

const STATUS_MAP = {
    0: {
        type: 'info',
        value: '草稿'
    },
    1: {
        type: 'warning',
        value: '未审核'
    },
    2: {
        type: 'success',
        value: '已审核'
    }
}

export default {
    data () {
        return {
            productTable: {
                options: {
                    select: true,
                    state: true
                },
                columns: [{
                    index: 0,
                    key: 'id',
                    value: 'ID',
                    sort: {
                        state: false,
                        func: (e, col) => {
                           // this.sortBy(col)
                        }
                    }
                }, {
                    index: 1,
                    key: 'name',
                    value: '产品名称'
                }, {
                    index: 2,
                    key: 'sku',
                    value: '产品SKU',
                    sort: {
                        state: false,
                        func: (e, col) => {
                            // this.sortBy(col)
                        }
                    }
                }, {
                    index: 3,
                    key: 'price',
                    value: '产品价格'
                }, {
                    index: 4,
                    key: 'detail',
                    value: '产品描述'
                }],
                actions: [{
                    type: 'button',
                    text: '编辑',
                    func: (e, row) => {
                        // this.editTable(row)
                    }
                }, {
                    type: 'button',
                    text: '删除',
                    func: (e, row) => {
                        console.log(row)
                        // this.removeTableItem(row)
                    }
                }],
                tableData: []
            }
        }
    },
    components: {
        rdCard,
        rdTable,
        rdButton,
        rdDropButton
    },
    created () {
        this.loadData()
    },
    methods: {
        loadData () {
            this.queryData()
                .then(list => {
                    this.productTable.tableData = list.map(item => {
                        return this.tableFormater(item)
                    })
                })
        },
        queryData () {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([{
                        id: 1,
                        name: '产品名称',
                        sku: 'KD7D73NX7BJ3B',
                        price: '199.00',
                        detail: '产品详情',
                        status: 1
                    }, {
                        id: 2,
                        name: '产品名称',
                        sku: 'KD7D73NX7BJ3B',
                        price: '199.00',
                        detail: '产品详情',
                        status: 1
                    }, {
                        id: 3,
                        name: '产品名称',
                        sku: 'KD7D73NX7BJ3B',
                        price: '199.00',
                        detail: '产品详情',
                        status: 0
                    }, {
                        id: 4,
                        name: '产品名称',
                        sku: 'KD7D73NX7BJ3B',
                        price: '199.00',
                        detail: '产品详情',
                        status: 1
                    }, {
                        id: 5,
                        name: '产品名称',
                        sku: 'KD7D73NX7BJ3B',
                        price: '199.00',
                        detail: '产品详情',
                        status: 2
                    }, {
                        id: 6,
                        name: '产品名称',
                        sku: 'KD7D73NX7BJ3B',
                        price: '199.00',
                        detail: '产品详情',
                        status: 0
                    }, {
                        id: 7,
                        name: '产品名称',
                        sku: 'KD7D73NX7BJ3B',
                        price: '199.00',
                        detail: '产品详情',
                        status: 2
                    }])
                }, 500)
            })
        },
        tableFormater (row) {
            row['checkbox'] = {
                disabled: false,
                checked: false,
                text: ''
            }
            row['state'] = STATUS_MAP[row.status]
            return row
        }
    }
}
</script>