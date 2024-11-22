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
        id: row.get('ID') || '',
        name: row.get('NOME') || '',
        birthDate: row.get('DATANASCIMENTO') || '',
        gender: row.get('SEXO') || '',
        maritalStatus: row.get('ESTADOCIVIL') || '',
        profession: row.get('PROFISSAO') || '',
        cpf: row.get('CPF') || '',
        rg: row.get('RG') || '',
        issuingAgency: row.get('ORGEMISSOR') || '',
        postalCode: row.get('CEP') || '',
        neighborhood: row.get('BAIRRO') || '',
        address: row.get('ENDERECO') || '',
        number: row.get('NUMERO') || '',
        complement: row.get('COMPLEMENTO') || '',
        city: row.get('CIDADE') || '',
        state: row.get('UF') || '',
        placeOfBirth: row.get('NATURALIDADE') || '',
        nationality: row.get('NACIONALIDADE') || '',
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
