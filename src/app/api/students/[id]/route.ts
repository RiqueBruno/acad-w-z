import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export const dynamic = 'force-static';

const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY,
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

const serviceAccountAuthPut = new JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  const doc = new GoogleSpreadsheet(
    '1QPi8_YOSghYt0i-nhDOIfq9DZvBgcQqEe-tioetSZYg',
    serviceAccountAuth
  );

  await doc.loadInfo();

  try {
    const sheet = doc.sheetsByIndex[0];
    const data = await sheet.getRows();

    const foundRow = data.find((row) => row.get('id') === id.toString());
    const student =
      foundRow &&
      [foundRow].map((row) => {
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

    return Response.json(student);
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Student not found' }, { status: 404 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  const studentUpdate = await request.json();

  const doc = new GoogleSpreadsheet(
    '1QPi8_YOSghYt0i-nhDOIfq9DZvBgcQqEe-tioetSZYg',
    serviceAccountAuthPut
  );

  await doc.loadInfo();

  try {
    const sheet = doc.sheetsByIndex[0];
    const data = await sheet.getRows();

    const foundRow = data.find((row) => row.get('id') === id.toString());

    if (foundRow) {
      foundRow.assign({
        ...studentUpdate,
        TEL1: studentUpdate.phone[0],
        TEL2: studentUpdate.phone[1],
        EMAIL1: studentUpdate.email[0],
        EMAIL2: studentUpdate.email[1],
        INSTAGRAM1: studentUpdate.instagram[0],
        INSTAGRAM2: studentUpdate.instagram[1],
      });
    } else {
      return Response.json({ error: 'Student not found' }, { status: 404 });
    }

    await foundRow.save();

    return Response.json({ message: 'Student updated successfully' });
  } catch (error) {
    console.error(error);
    return Response.json({ error });
  }
}
