import {
  ComparisonCard,
  Headline,
  Subhead,
  Label,
  BulletList,
  Reality,
  Impact,
  Insight,
} from './ComparisonCard'

export function ComparisonFlow() {
  return (
    <section className="relative py-32" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F9EAE4 50%, #EADEFC 100%)' }}>
      <div className="max-w-content mx-auto px-6">
        {/* Problem State 1 */}
        <ComparisonCard
          image="Care teams looking confused/distressed"
          imagePosition="left"
          theme="problem"
        >
          <Headline>Every patient is on a different day.</Headline>
          <Subhead>
            And everything feels urgent when no one has the full picture.
          </Subhead>
          <BulletList>
            <li>• Long journeys with dozens of touchpoints</li>
            <li>• Tasks scattered across tools and notes</li>
            <li>• No single place to track what's due, missed, or delayed</li>
          </BulletList>
          <Reality>
            Important tasks slip. Follow-ups get delayed. Teams stay reactive.
          </Reality>
        </ComparisonCard>

        {/* Problem State 2 */}
        <ComparisonCard
          image="Calendar with multiple updates"
          imagePosition="right"
          theme="problem"
        >
          <Headline>Your day starts with questions, not priorities.</Headline>
          <BulletList>
            <li>• Scanning notes</li>
            <li>• Checking multiple spreadsheets</li>
            <li>• Asking teammates for updates</li>
          </BulletList>
          <Insight>
            With 1000+ patients and without a system, teams spend more time
            figuring out what to do than actually doing it.
          </Insight>
        </ComparisonCard>

        {/* Solution State 1 */}
        <ComparisonCard
          image="Journey Tracker Dashboard"
          imagePosition="left"
          theme="solution"
        >
          <Headline highlight>Every patient. Every day. Clearly mapped.</Headline>
          <Label>Journey Tracker shows:</Label>
          <BulletList>
            <li>• Maps every patient to a journey and day</li>
            <li>• Auto-surfaces daily tasks across all assigned patients</li>
            <li>• Flags missed, delayed, and upcoming actions</li>
          </BulletList>
          <Impact>No chasing. No guesswork.</Impact>
        </ComparisonCard>

        {/* Solution State 2 */}
        <ComparisonCard
          image="Journey Tracker My Tasks"
          imagePosition="right"
          theme="solution"
        >
          <Headline highlight>
            Teams focus on care. The system handles the tracking.
          </Headline>
          <Label>Daily reminders ensure:</Label>
          <BulletList>
            <li>• Nothing is forgotten</li>
            <li>• No task is duplicated</li>
            <li>• No patient is overlooked</li>
          </BulletList>
        </ComparisonCard>
      </div>
    </section>
  )
}
