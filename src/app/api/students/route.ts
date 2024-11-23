import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { Student } from '@/types/student';

export const dynamic = 'force-static';

const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY,
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

const serviceAccountAuthEdit = new JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

export async function GET() {
  const doc = new GoogleSpreadsheet(
    '1QPi8_YOSghYt0i-nhDOIfq9DZvBgcQqEe-tioetSZYg',
    serviceAccountAuth
  );

  await doc.loadInfo();

  try {
    const sheet = doc.sheetsByTitle['bd-alunos'];
    const data = await sheet.getRows();

    const rows: Student[] = data.map((row) => {
      return {
        id: row.get('id') || '',
        name: row.get('name') || '',
        birthDate: row.get('birthDate') || '',
        gender: row.get('gender') || '',
        maritalStatus: row.get('maritalStatus') || '',
        profession: row.get('profession') || '',
        cpf: row.get('cpf') || '',
        rg: row.get('rg') || '',
        issuingAgency: row.get('issuingAgency') || '',
        postalCode: row.get('postalCode') || '',
        neighborhood: row.get('neighborhood') || '',
        address: row.get('address') || '',
        number: row.get('number') || '',
        complement: row.get('complement') || '',
        city: row.get('city') || '',
        state: row.get('state') || '',
        placeOfBirth: row.get('placeOfBirth') || '',
        nationality: row.get('nationality') || '',
        phone: [row.get('TEL1') || '', row.get('TEL2') || ''],
        email: [row.get('EMAIL1') || '', row.get('EMAIL2') || ''],
        instagram: [row.get('INSTAGRAM1') || '', row.get('INSTAGRAM2') || ''],
      };
    });

    return Response.json(rows);
  } catch (err) {
    console.error(err);
    return Response.json({ error: err });
  }
}

export async function POST(request: Request) {
  const doc = new GoogleSpreadsheet(
    '1QPi8_YOSghYt0i-nhDOIfq9DZvBgcQqEe-tioetSZYg',
    serviceAccountAuthEdit
  );

  await doc.loadInfo();

  try {
    const sheet = doc.sheetsByIndex[0];
    const student: Promise<Student> = request.json();

    if (!student) {
      return Response.json({ error: 'Invalid data' }, { status: 400 });
    }

    if (
      !(await student).id ||
      !(await student).name ||
      !(await student).birthDate ||
      !(await student).cpf
    ) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newStudent = {
      id: (await student).id,
      name: (await student).name,
      birthDate: (await student).birthDate,
      gender: (await student).gender,
      maritalStatus: (await student).maritalStatus,
      profession: (await student).profession,
      cpf: (await student).cpf,
      rg: (await student).rg,
      issuingAgency: (await student).issuingAgency,
      postalCode: (await student).postalCode,
      neighborhood: (await student).neighborhood,
      address: (await student).address,
      number: (await student).number,
      complement: (await student).complement,
      city: (await student).city,
      state: (await student).state,
      placeOfBirth: (await student).placeOfBirth,
      nationality: (await student).nationality,
      TEL1: (await student).phone[0],
      TEL2: (await student).phone[1],
      EMAIL1: (await student).email[0],
      EMAIL2: (await student).email[1],
      INSTAGRAM1: (await student).instagram[0],
      INSTAGRAM2: (await student).instagram[1],
    };

    await sheet.addRow(newStudent);

    return Response.json(
      {
        message: 'Student added successfully',
        student: newStudent,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
  }
}
