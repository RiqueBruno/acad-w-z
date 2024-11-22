import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { Student } from '@/types/student';

export const dynamic = 'force-static';

const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY,
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

export async function GET() {
  const doc = new GoogleSpreadsheet(
    '1QPi8_YOSghYt0i-nhDOIfq9DZvBgcQqEe-tioetSZYg',
    serviceAccountAuth
  );

  await doc.loadInfo();

  try {
    const sheet = doc.sheetsByIndex[0];
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