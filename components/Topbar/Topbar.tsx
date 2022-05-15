import Button from '../common/Button/Button'
import Switch from '../common/Switch/Switch'

export default function Topbar() {
  return (
    <div className="topbar">
        <Switch label='Enabled' id='state-enabled' />
        <Button>Serialize JSON</Button>
    </div>
  )
}