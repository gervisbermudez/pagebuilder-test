import Button from "../common/Button/Button";
import Range from "../common/Range/Range";

export default function SettingsPanel() {
  return (
    <div className="settings-panel">SettingsPanel
        <hr/>
        <div className="selected-component">
            <span>Selected:</span> <span>Button</span>
        </div>
        <div>
            Props
            <hr />
            <Range />
        </div>
        <Button variant='danger'>Delete</Button>
    </div>
  )
}
