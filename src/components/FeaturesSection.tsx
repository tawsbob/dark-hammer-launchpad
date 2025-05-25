
import { Card } from '@/components/ui/card';
import { Dashboard, Upload, Forum } from 'lucide-react';

export const FeaturesSection = () => {
  const features = [
    {
      icon: Dashboard,
      title: 'Multi-Channel Cockpit',
      description: 'Monitor all your channels from one unified dashboard. Real-time analytics, subscriber counts, and revenue tracking.',
      benefit: 'Save 3+ hours daily on channel switching'
    },
    {
      icon: Upload,
      title: 'Drag-and-Drop Upload + Calendar',
      description: 'Schedule content across channels with our visual calendar. Bulk upload, automatic optimization, and smart scheduling.',
      benefit: 'Never miss an upload deadline again'
    },
    {
      icon: Forum,
      title: 'Comment Inbox with Bulk Actions',
      description: 'Manage comments from all channels in one place. AI-powered moderation, bulk responses, and engagement tracking.',
      benefit: 'Respond 5x faster to your community'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-display-small font-bold text-gray-900 dark:text-white mb-4">
            What V1 Ships Today
          </h2>
          <p className="text-title-large text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stop waiting for perfection. Start streamlining your creator workflow immediately.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 surface-container-high border-0 rounded-2xl hover:scale-105 transition-all duration-300 group cursor-pointer">
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-green-700 transition-colors">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-title-large font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-body-medium text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900 rounded-full">
                  <span className="text-sm font-medium text-green-800 dark:text-green-200">
                    ⚡ {feature.benefit}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
