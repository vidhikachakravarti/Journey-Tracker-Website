import { Header } from '@/components/shared/Header'
import { Footer } from '@/components/shared/Footer'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'

const industries = [
  {
    title: 'Health Systems',
    description: 'Large multi-clinic deployments managing complex care programs',
  },
  {
    title: 'Digital Health Startups',
    description: 'High-growth teams scaling care delivery operations',
  },
  {
    title: 'Clinical Research',
    description: 'Research teams managing patient cohorts in trials',
  },
]

export default function ClientsPage() {
  return (
    <main className="min-h-screen" style={{ background: 'linear-gradient(180deg, #D3B9F9 0%, #EADEFC 50%, #F9EAE4 100%)' }}>
      <Header />

      <section className="py-20">
        <div className="max-w-[1120px] mx-auto px-6">
          <SectionHeader title="Different industries using Journey Tracker" />

          {/* Client Logos Placeholder */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-6 gap-12 items-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-video rounded-lg flex items-center justify-center border opacity-80 hover:opacity-100 transition-opacity"
                style={{
                  background: 'linear-gradient(135deg, #EADEFC 0%, #D3B9F9 100%)',
                  borderColor: '#9F7BFF'
                }}
              >
                <span className="text-sm font-medium" style={{ color: '#7848FE' }}>Logo {i}</span>
              </div>
            ))}
          </div>

          {/* Industry Cards */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
            {industries.map((industry, index) => (
              <Card key={index} theme="bordered" padding="large" hover>
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto" style={{ backgroundColor: '#D3B9F9' }}>
                    <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#7848FE' }} />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {industry.title}
                  </h3>
                  <p className="text-neutral-600">{industry.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
