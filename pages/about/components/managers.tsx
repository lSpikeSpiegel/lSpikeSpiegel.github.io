export default function Managers() {
  const managers = [
    { name: '黄山', title: '创始人&CEO' },
    { name: '曾奇', title: '合伙人&CTO' },
    { name: '欧强', title: '合伙人&战略中心负责人' },
    { name: '江山', title: '合伙人&生产中心负责人' },
  ]
  return (
    <div className="text-30 px-150 text-thirdDark flex justify-center flex-wrap gap-200">
      {managers.map((i, idx) => (
        <div className="flex" style={{ width: '52rem' }} key={i.name}>
          <div className="center">
            <div className="w-8 h-170 bg-primary"></div>
            <img className="w-190" src={`/images/managers_${idx}.png`} alt="" />
          </div>
          <div>
            <div className="px-40 py-10">{i.name}</div>
            <div className="h-4 w-270 bg-primary"></div>
            <div className="pl-40 pt-20 text-20 text-thirdGray">{i.title}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
