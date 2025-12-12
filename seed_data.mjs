import { createClient } from '@supabase/supabase-js';

// Note: In a real node script we'd use dotenv, but for simplicity in this frontend-focused environment
// we'll just paste the keys here temporarily or assume this runs in a context with them.
// Since we have the keys from the user interaction:
const supabaseUrl = 'https://wfgrgjhbtiqfjjzypcmz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmZ3JnamhidGlxZmpqenlwY216Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0NzYyOTAsImV4cCI6MjA4MTA1MjI5MH0.lXTj3plCLLgRZy02CbUBtXvEQgq9RCErs33v4oDi0II';

const supabase = createClient(supabaseUrl, supabaseKey);

const doctors = [
    // Mumbai
    {
        name: "Dr. Anjali Desai",
        specialty: "Developmental Pediatrician",
        city: "Mumbai",
        address: "Bandra West, Mumbai",
        latitude: 19.0607,
        longitude: 72.8362,
        rating: 4.9,
        review_count: 124,
        verified: true,
        availability: "Available Tomorrow",
        insurance_accepted: true
    },
    {
        name: "Dr. Rajesh Kumar",
        specialty: "Clinical Psychologist",
        city: "Mumbai",
        address: "Andheri East, Mumbai",
        latitude: 19.1136,
        longitude: 72.8697,
        rating: 4.7,
        review_count: 89,
        verified: true,
        availability: "Available Today",
        insurance_accepted: true
    },
    // Bangalore
    {
        name: "Dr. Priya Sharma",
        specialty: "Speech Therapist",
        city: "Bangalore",
        address: "Indiranagar, Bangalore",
        latitude: 12.9716,
        longitude: 77.6412,
        rating: 4.8,
        review_count: 210,
        verified: true,
        availability: "Available Today",
        insurance_accepted: true
    },
    {
        name: "Dr. Arun Singh",
        specialty: "Occupational Therapist",
        city: "Bangalore",
        address: "Koramangala, Bangalore",
        latitude: 12.9352,
        longitude: 77.6245,
        rating: 4.6,
        review_count: 56,
        verified: true,
        availability: "Next Week",
        insurance_accepted: false
    },
    // Delhi
    {
        name: "Dr. Meera Patel",
        specialty: "Behavioral Therapist",
        city: "Delhi",
        address: "Vasant Vihar, New Delhi",
        latitude: 28.5603,
        longitude: 77.1610,
        rating: 4.9,
        review_count: 312,
        verified: true,
        availability: "Available Today",
        insurance_accepted: true
    },
    {
        name: "Dr. Vikram Sethi",
        specialty: "Child Psychiatrist",
        city: "Delhi",
        address: "Greater Kailash, New Delhi",
        latitude: 28.5482,
        longitude: 77.2410,
        rating: 4.8,
        review_count: 150,
        verified: true,
        availability: "Available Tomorrow",
        insurance_accepted: true
    }
];

async function seed() {
    console.log('Seeding doctors data...');
    const { data, error } = await supabase
        .from('doctors')
        .insert(doctors)
        .select();

    if (error) {
        console.error('Error seeding data:', error);
    } else {
        console.log('Success! Added doctors:', data.length);
    }
}

seed();
