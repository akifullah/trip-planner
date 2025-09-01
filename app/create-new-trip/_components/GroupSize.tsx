import React from 'react'
export const SelectTravelesList = [
    {
        "id": 1,
        "title": "Just Me",
        "desc": "A sole traveles in exploration",
        "icon": "✈️",
        "people": "1"
    },
    {
        "id": 2,
        "title": "A Couple",
        "desc": "Two traveles in tandem",
        "icon": "🥂",
        "people": "2 People"
    },
    {
        "id": 3,
        "title": "Family",
        "desc": "A group of fun loving adv",
        "icon": "🏡",
        "people": "3 to 5 People"
    },
    {
        "id": 4,
        "title": "Friends",
        "desc": "A bunch of thrill-seekes",
        "icon": "⛵️",
        "people": "5 to 10 People"
    }
]
const GroupSize = ({ onSelectOption }: any) => {
    return (
        <div>
            {
                SelectTravelesList.map((item) => (
                    <div key={item.id} className='mb-2 p-3 border rounded-2xl bg-white hover:border-primary cursor-pointer'
                     onClick={()=>onSelectOption(item.title + ":" + item.people)}>
                        <h3>{item.title} {item.icon}</h3>
                        <p>{item.desc} <span className='text-xs text-gray-500'>({item.people})</span></p>
                        <p></p>
                    </div>
                ))
            }
        </div>
    )
}

export default GroupSize