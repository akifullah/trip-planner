import React from 'react'
export const SelectBudgetOptions = [
    {
        "id": 1,
        "title": "Cheap",
        "desc": "Stay conscious of costs",
        "icon": "💵",
        "color": "bg-green-100 text-green-600"
    },
    {
        "id": 2,
        "title": "Moderate",
        "desc": "Keep cost on the average side",
        "icon": "💰",
        "color": "bg-yellow-100 text-yellow-600"
    },
    {
        "id": 3,
        "title": "Luxury",
        "desc": "Don't worry about cost",
        "icon": "💸",
        "color": "bg-purple-100 text-purple-600"
    }
]
const Budget = ({ onSelectOption }: any) => {
    return (
        <div>
            {
                SelectBudgetOptions.map((item) => (
                    <div key={item.id} className={`mb-2 p-3 border rounded-2xl bg-white hover:border-primary cursor-pointer ${item.color}`}
                        onClick={() => onSelectOption(item.title + ":" + item.desc)}>
                        <h3>{item.title} {item.icon}</h3>
                        <p>{item.desc}</p>
                        <p></p>
                    </div>
                ))
            }
        </div>
    )
}

export default Budget