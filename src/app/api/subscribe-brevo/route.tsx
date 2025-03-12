import { NextResponse } from 'next/server';

interface RequestBody {
  email: string;
  name?: string;
}

interface BrevoApiResponse {
  message: string;
  code?: string;
}

export async function POST(request: Request): Promise<NextResponse> {
  console.log('API Token:', process.env.BREVO_SIGNUP_API_TOKEN);

  try {
    const { email, name }: RequestBody = await request.json();

    if (!email) {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      );
    }

    const options: RequestInit = {
      method: 'POST',
      headers: { 
        accept: 'application/json',
        'content-type': 'application/json',
        'api-key': process.env.BREVO_SIGNUP_API_TOKEN || '',
      },
      body: JSON.stringify({
        email,
        attributes: {},
        emailBlacklisted: false,
        smsBlacklisted: true,
        listIds: [parseInt(process.env.BREVO_LIST_ID || '0')],
        updateEnabled: true,
      }),
    };

    const response = await fetch('https://api.brevo.com/v3/contacts', options);
    const responseData: BrevoApiResponse = await response.json();

    if (!response.ok) {
      if (response.status === 400 && responseData.code === 'duplicate_parameter') {
        return NextResponse.json({ message: 'Subscription updated' });
      }

      console.error('Brevo API error:', responseData);
      return NextResponse.json(
        { message: responseData.message || 'Failed to subscribe' },
        { status: response.status }
      );
    }

    return NextResponse.json({ message: 'Successfully subscribed' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Server error:', error.message);
    } else {
      console.error('Server error:', error);
    }

    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

